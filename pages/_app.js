import { ThemeProvider } from 'next-themes'
import "@fontsource/inter";
import '../styles/globals.css'
import Container from '../Components/Container/Container';
import NavBar from '../Components/NavBar/NavBar';
function MyApp({ Component, pageProps, router }) {



  return (
    <>
      {/* <ThemeProvider attribute="class" enableSystem={false}> */}
        <NavBar/>
        <Container>
          <Component {...pageProps} key={router.route} />
        </Container>
      {/* </ThemeProvider> */}
    </>
  )
}

export default MyApp
