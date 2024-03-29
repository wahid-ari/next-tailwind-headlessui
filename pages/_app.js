import { GlobalProvider } from '@utils/GlobalContext';
import { AuthProvider } from '@utils/useAuth';
import { SessionProvider } from 'next-auth/react';

import '@styles/globals.css';
import '@styles/swiper.css';
import '@styles/cmdk.css';

import { MenuProvider } from 'kmenu';

import '@styles/kmenu.css';
import '@styles/step.css';
import '@styles/steps.css';
import '@styles/hover.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <GlobalProvider>
      <SessionProvider session={session}>
        <AuthProvider>
          <MenuProvider>
            <Component {...pageProps} />
          </MenuProvider>
        </AuthProvider>
      </SessionProvider>
    </GlobalProvider>
  );
}

export default MyApp;
