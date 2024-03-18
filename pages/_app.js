import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/context/UserContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { RegisterProvider } from '@/context/RegisterContext';
import { Footer } from '@/components/Footer';
import { Topbar } from '@/components/Topbar';
import { ToastContainer } from 'react-toastify';
import Main_Sidebar from '@/components/Main_Sidebar';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <RegisterProvider>
        <UserProvider>
          <ThemeProvider>
            <div
              id="app"
              className="flex h-screen w-screen bg-white dark:bg-black"
            >
              <div className="hidden lg:block">
                <Main_Sidebar />
              </div>

              <div className="flex-grow overflow-auto">
                <Topbar />
                {/* Main content goes here */}
                <Component {...pageProps} />
                <Footer />
              </div>
            </div>
            {/* <Appbar /> */}

            <ToastContainer />
          </ThemeProvider>
        </UserProvider>
      </RegisterProvider>
    </SessionProvider>
  );
}
