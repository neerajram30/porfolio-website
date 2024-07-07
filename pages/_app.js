import "@fontsource/inter";
import '../styles/globals.css'
import Container from '../Components/Container';
import NavBar from '../Components/NavBar';
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 5000); // Adjust delay as needed
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      {
        !loading ?
          <div>
            <NavBar />
            <Container>
              <Component {...pageProps} key={router.route} />
            </Container>
          </div>
          :
          <Loader name="Neeraj" />
      }
    </>
  )
}

export default MyApp
