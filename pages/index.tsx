import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductFeed from '../components/ProductFeed'

const Home: NextPage = ({products}) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head> 

       {/* header */}          
       <Header />
       <main className='max-w-screen-2xl mx-auto'>
         {/* banner */}
         <Banner />
         
         {/* products */}
         <ProductFeed products={products} />
        
       </main>
       
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
    products,
  }}
}

//https://fakestoreapi.com/products