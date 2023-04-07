import ThemeProvider from 'components/ThemeProvider/ThemeProvider';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";


export default function App({ Component, pageProps }: AppProps) {
  return( 
    <RecoilRoot>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
    </RecoilRoot>

        )
}
