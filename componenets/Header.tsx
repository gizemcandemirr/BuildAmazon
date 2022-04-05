import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
         <div>
             <div>
                 <Image src="https://links.papareact.com/f90" width={150} height={40} />
             </div>
         </div>

         {/* bottom */}
         <div></div>
    </header>
  )
}

export default Header