import Head from 'next/head'
import Tools from '../Components/Tools/Tools'
import Footer from '../Components/Footer/Footer'
import Profile from '../Components/Profile/Profile'
import { useTheme } from 'next-themes'
// import { Rings } from 'react-loader-spinner'
import NavBar from '../Components/NavBar/NavBar'


export default function Home() {


  // const [opened,setOpened] = useState(false);
  const { theme, setTheme } = useTheme()
  // const [loading,setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true);
  //   }, 4000);
  // }, [])


  return (


    <div className='dark:bg-gradient-to-tr dark:from-[#111827] dark:to-black'>
      <Head>
        <title>Neeraj M R | Full stack web developer</title>
        <meta name="description" content="Neeraj M R developer portfolio" />
        <meta property="og:title" content="Neeraj M R" />
        <meta property="og:description" content="Neeraj M R is kerala based web developer" />
        <meta property="og:url" content="https://neerajram.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/neeraj.png" />
      </Head>
      {/* {!loading ? 
    (<span className='flex flex-col items-center justify-center h-screen' >
    <Rings ariaLabel="loading-indicator" color='#36485E' width={100} height={100}/>
    </span>) 
    : */}
      <div>
        <main className='overflow-hidden'>
          <NavBar/>
          <Profile theme={theme} />
          <Tools theme={theme} />
          <Footer theme={theme} />
        </main>
      </div>
      {/* } */}
    </div>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles?username=neerajram30`)
  const json = await res.json()
  return { props: { post: json } }
}