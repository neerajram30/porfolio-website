import { ThemeProvider } from 'next-themes'
import "@fontsource/inter";
import '../styles/globals.css'
import Container from '../Components/Container/Container';
function MyApp({ Component, pageProps, router }) {



  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Container>
          <Component {...pageProps} key={router.route} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
