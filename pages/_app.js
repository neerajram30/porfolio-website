import "@fontsource/inter";
import '../styles/globals.css';
import Container from '../Components/Container';
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
      <Container>
        {
          !loading ?
            <Component {...pageProps} key={router.route} />
            :
            <Loader name="Neeraj" />
        }
      </Container>
    </>
  )
}

export default MyApp
