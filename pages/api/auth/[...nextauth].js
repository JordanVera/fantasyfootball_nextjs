// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: { label: 'Username or Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // console.log('authorize credentials', credentials);
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

        // console.log('authorized user', user);
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log('User signed in:', user);
      return true;
    },
    async session({ session, token }) {
      // console.log('session callback - token:', token);
      session.user = token.user;
      // console.log('session callback - session:', session);
      return session;
    },
    async jwt({ token, user }) {
      // console.log('JWT callback - user:', user);
      if (user) {
        token.user = {
          id: user.id,
          email: user.email,
          username: user.username,
        };
      }
      // console.log('JWT callback - token:', token);
      return token;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/') || new URL(url).origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);
