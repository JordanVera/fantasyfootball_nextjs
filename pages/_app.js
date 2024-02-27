import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/context/UserContext';
import { RegisterProvider } from '@/context/RegisterContext';
import { ToastContainer } from 'react-toastify';
import Main_Sidebar from '@/components/Main_Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <RegisterProvider>
        <UserProvider>
          <div id="app" className="flex h-screen w-screen bg-black">
            <Main_Sidebar />

            <div className="flex-grow overflow-auto">
              {/* Main content goes here */}
              <Component {...pageProps} />
            </div>
          </div>
          {/* <Appbar /> */}

          <ToastContainer />
        </UserProvider>
      </RegisterProvider>
    </SessionProvider>
  );
}
