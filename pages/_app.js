import { GlobalProvider } from "@utils/GlobalContext";
import { SessionProvider } from "next-auth/react"
import { AuthProvider } from "@utils/useAuth";
import "@styles/globals.css";
import "@styles/swiper.css";
import "@styles/cmdk.css";
import { MenuProvider } from 'kmenu'
import '@styles/kmenu.css'

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {

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

export default MyApp