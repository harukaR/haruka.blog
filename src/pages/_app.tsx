import ThemeProvider from 'components/ThemeProvider/ThemeProvider';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";




export default function App({ Component, pageProps,router }: AppProps) {
  return( 
      <RecoilRoot>
          <ThemeProvider>
            <Component  key={router.asPath} {...pageProps} />
          </ThemeProvider>
      </RecoilRoot>

        )
}
