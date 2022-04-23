import {ThemeProvider} from 'next-themes'
import '../styles/globals.css'
import { Rings } from 'react-loader-spinner'
import {useState,useEffect} from 'react'
function MyApp({ Component, pageProps }) {

  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, [])
  

  return (
    <>
{!loading ?

(<span className='flex flex-col items-center justify-center h-screen' >
<Rings ariaLabel="loading-indicator" color='#36485E' width={100} height={100}/>
</span>):    

  (<ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>) 

} 
    </>
  )
}

export default MyApp
