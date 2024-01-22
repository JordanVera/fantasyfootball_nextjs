import { SessionProvider } from 'next-auth/react';
import Appbar from '@/components/Appbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Appbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
