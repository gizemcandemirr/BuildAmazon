import Image from 'next/image'
import React, { useState } from 'react'
import {StarIcon} from "@heroicons/react/solid"
import Currency from 'react-currency-format';

type Props = {
    id: number;
    title:string;
    price: number;
    description:string;
    category:string;
    image: string;
    
}
const MAX_RATING =5;
const MIN_RATING =1;


function Product(props: Props) {
   
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10' key={props.id}>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{props.category}</p>
        <Image src={props.image} width={200} height={200} objectFit="contain" />
        <h4 className='my-3'>{props.title}</h4>

        <div className='flex'>
            {
                Array(rating).fill().map( (_, i) => (
                    <StarIcon className='h-5 text-yellow-500' />
                ))
            }
        </div>
      <p className='text-xs my-2 line-clamp-2'>{ props.description } </p>  
      <div className='mb-5'>
          <Currency
            value={props.price}
            prefix={'$'}
          />
          {hasPrime && (
              <div className='flex items-center space-x-2 -mt-5'>
                  <img src="https://links.papareact.com/fdw" alt="" className='w-12' />
                  <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
              </div>
          )}

      </div>
 
 <button className='mt-auto button'> Add to Basket</button>
    </div>
  )
}

export default Product