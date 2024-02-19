import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/context/UserContext';
import Appbar from '@/components/Appbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <Appbar />
        <Component {...pageProps} />
        <ToastContainer />
      </UserProvider>
    </SessionProvider>
  );
}
