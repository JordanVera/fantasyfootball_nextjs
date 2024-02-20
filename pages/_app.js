import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/context/UserContext';
import Appbar from '@/components/Appbar';
import { ToastContainer } from 'react-toastify';
import Main_Sidebar from '@/components/Main_Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ProSidebarProvider>
        <UserProvider>
          <div id="app" className="flex h-screen w-screen">
            <div className=" bg-gray-800 text-white">
              {/* Sidebar content goes here */}
              <Main_Sidebar />
            </div>

            <div className="flex-grow">
              {/* Main content goes here */}
              <Component {...pageProps} />
            </div>
          </div>
          {/* <Appbar /> */}

          <ToastContainer />
        </UserProvider>
      </ProSidebarProvider>
    </SessionProvider>
  );
}
