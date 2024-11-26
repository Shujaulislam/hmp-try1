import React from 'react'

interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}
function page() {
  return (
    <>
    <div className='text-6xl'>
      Products Page
    </div>
    <div>
        
    </div>
    </>
  )
}

export default page



// schema will be defined here for products
// tailwind table props