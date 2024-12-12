import { useEffect } from 'react';
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
import useDetectScroll from '@smakss/react-scroll-direction';
import RegistrationDialog from '@/components/dialogs/RegistrationDialog';
import SettingsDialog from '@/components/dialogs/SettingsDialog';

import { useRouter } from 'next/router';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // const { scrollDir, scrollPosition } = useDetectScroll();
  // useEffect(() => {
  //   // console.log('sda');
  //   console.log({ scrollDir });
  //   console.log({ scrollPosition });
  // }, [scrollDir, scrollPosition]);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.querySelector('#main').scrollTop = 0;
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup function to remove the event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // useEffect(() => {
  //   console.log('Session in _app.js:', session);
  // }, [session]);

  return (
    <SessionProvider session={session}>
      <RegisterProvider>
        <UserProvider>
          <ThemeProvider>
            <div
              id="app"
              className="flex w-screen h-screen bg-white dark:bg-black"
            >
              <div className="hidden lg:block">
                <Main_Sidebar />
              </div>

              <div id="main" className="flex-grow overflow-auto">
                <div className="sticky top-0 z-50 ">
                  <Topbar />
                </div>
                {/* Main content goes here */}
                <Component {...pageProps} />

                <RegistrationDialog />
                <SettingsDialog />

                <Footer />
              </div>
            </div>

            <ToastContainer />
          </ThemeProvider>
        </UserProvider>
      </RegisterProvider>
    </SessionProvider>
  );
}
