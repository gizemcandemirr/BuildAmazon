import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Create Amazon</title>
      </Head> 

       {/* header */}          
       <Header />
       <main className='max-w-screen-2xl mx-auto'>
         {/* banner */}
         <Banner />
         
         {/* products */}
       </main>
       
    </div>
  )
}

export default Home
