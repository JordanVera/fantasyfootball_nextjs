// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    jwt: false, // Use database sessions instead of JWT
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: { label: 'Username or Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials.identifier || !credentials.password) {
          throw new Error('Invalid Password/Identifier');
        }
        const identifier = credentials.identifier.toLowerCase();

        const user = await prisma.user.findFirst({
          where: {
            OR: [{ email: identifier }, { username: identifier }],
          },
        });

        if (!user) {
          throw new Error('Invalid username/email or password.');
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error('Invalid username/email or password.');
        }
        const userId = user.id;

        // await prisma.user.update({
        //   where: { id: userId },
        //   data: { lastLoggedOn: new Date() },
        // });

        const generateJWT = (payload, expiresIn) => {
          let expireTime = '30d';
          if (expiresIn) {
            expireTime = '45d';
            console.log('jwt expireTime = true === 45d');
          }

          return jwt.sign(payload, process.env.NEXTAUTH_SECRET, {
            expiresIn: expireTime,
          });
        };

        const token = generateJWT({
          email: user.email,
          username: user.username,
          id: user.id,
        });

        return {
          ...user,
          token,
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // You can perform additional actions here upon sign in
      console.log('USSER');
      console.log(user);
      return true;
    },
    async session({ session, user, token }) {
      // You can add more user data to the session here
      session.user = user;
      session.user.id = user.id;
      return session;
    },

    async redirect({ url, baseUrl }) {
      // console.log("REDIREDCC");
      // console.log({ url, baseUrl });

      // Check if the URL is relative and if it's the same origin
      if (url.startsWith('/') || new URL(url).origin === baseUrl) {
        return url;
      }

      return baseUrl;
    },
    // ...other callbacks
  },

  // Additional NextAuth configuration...
};

export default NextAuth(authOptions);
