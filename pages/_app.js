import "@fontsource/inter";
import '../styles/globals.css'
import Container from '../Components/Container/Container';
import NavBar from '../Components/NavBar/NavBar';
import { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";
function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 5000); // Adjust delay as needed
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <>
      {/* { */}

        {/* // !loading ? */}
          <div>
            <NavBar />
            <Container>
              {/* <URQLProvider value={client}> */}
              <Component {...pageProps} key={router.route} />
              {/* </URQLProvider> */}
            </Container>
          </div>
          {/* : */}
          {/* <Loader name="Neeraj" /> */}
      {/* } */}
    </>
  )
}

export default MyApp
