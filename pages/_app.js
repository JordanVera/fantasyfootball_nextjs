import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/context/UserContext';
import Appbar from '@/components/Appbar';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <Appbar />
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  );
}
