import {ThemeProvider} from 'next-themes'
import "@fontsource/inter";
import '../styles/globals.css'
function MyApp({ Component, pageProps,router}) {

  

  return (
    <>
  <ThemeProvider attribute="class" enableSystem={true}>
      <Component {...pageProps} key={router.route}/>
  </ThemeProvider>  
    </>
  )
}

export default MyApp
