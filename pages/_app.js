import {ThemeProvider} from 'next-themes'
import "@fontsource/inter";
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {

  

  return (
    <>
  <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>  
    </>
  )
}

export default MyApp
