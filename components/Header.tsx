import Image from 'next/image'
import React from 'react'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <header>
      <div className="flex flex-grow items-center bg-amazon_blue p-1 py-2">
        <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* search */}
        <div className="hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex">
          <input
            type="text"
            className="h-full w-6 flex-shrink flex-grow rounded-l-md p-2 focus:outline-none "
          />
          <SearchIcon className="h-12 p-4" />
        </div>
      </div>

      {/* bottom */}
      <div></div>
    </header>
  )
}

export default Header
