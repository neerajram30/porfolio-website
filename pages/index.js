import Head from 'next/head'
import Tools from '../Components/Tools/Tools'
import Footer from '../Components/Footer/Footer'
import Profile from '../Components/Profile/Profile'
// import { Rings } from 'react-loader-spinner'

export default function Home() {


  // const [opened,setOpened] = useState(false);
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
        <meta property="og:description" content="Neeraj M R is a Full Stack Web developer from India" />
        <meta property="og:url" content="https://neerajram.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://neerajram.vercel.app/Neeraj.jpg" />
        <link rel="icon" href="/neeraj.png" />
      </Head>
      {/* {!loading ? 
    (<span className='flex flex-col items-center justify-center h-screen' >
    <Rings ariaLabel="loading-indicator" color='#36485E' width={100} height={100}/>
    </span>) 
    : */}
      <div>
        <main className='overflow-hidden'>
          {/* <NavBar/> */}
          <Profile/>
          <Tools/>
          <Footer/>
        </main>
      </div>
      {/* } */}
    </div>
  )
}
// export async function getServerSideProps() {
//   const res = await fetch(`https://dev.to/api/articles?username=neerajram30`)
//   const json = await res.json()
//   return { props: { post: json } }
// }