import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Amazon</title>
      </Head> 

       {/* header */}          
       <Header />
       <main>
         {/* banner */}
         
         {/* products */}
       </main>
       
    </div>
  )
}

export default Home
