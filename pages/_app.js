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
          {/* <URQLProvider value={client}> */}
          <Component {...pageProps} key={router.route} />
          {/* </URQLProvider> */}
        </Container>
      {/* </ThemeProvider> */}
    </>
  )
}

export default MyApp
