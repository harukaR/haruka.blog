import ThemeProvider from 'components/ThemeProvider/ThemeProvider';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import { AnimatePresence } from 'framer-motion'



export default function App({ Component, pageProps,router }: AppProps) {
  return( 
    <AnimatePresence mode="wait">
      <RecoilRoot>
          <ThemeProvider>
            <Component  key={router.asPath} {...pageProps} />
          </ThemeProvider>
      </RecoilRoot>
    </AnimatePresence>

        )
}
