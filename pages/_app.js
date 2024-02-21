import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/context/UserContext';
import { ToastContainer } from 'react-toastify';
import Main_Sidebar_New from '@/components/Main_Sidebar_New';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <div id="app" className="flex h-screen w-screen">
          <div className=" bg-black text-white border-r border-gray-800">
            {/* Sidebar content goes here */}
            <Main_Sidebar_New />
          </div>

          <div className="flex-grow">
            {/* Main content goes here */}
            <Component {...pageProps} />
          </div>
        </div>
        {/* <Appbar /> */}

        <ToastContainer />
      </UserProvider>
    </SessionProvider>
  );
}
