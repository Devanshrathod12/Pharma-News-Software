






import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
          {/* {-------Left section------------} */}
        <div className=''>   
            <img className='mb-5 w-40' src="" alt="" />
            <p className='w-full md:w-2/3 text-gray-600  leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem doloribus labore cumque in, dolorum necessitatibus recusandae quos, aliquam vitae perferendis deleniti laudantium id quod doloremque voluptas porro! Fugit neque quasi reiciendis tempora ad doloremque! Facere unde repudiandae molestias cumque! Quo dolores cumque numquam dolorum quod magnam eius? Perferendis, corrupti!</p>
        </div>

        {/* -------------Center Section-------------- */}

        <div>
            <p className='text-xl font-medium mb-5'> COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home </li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
        </div>

        {/* ---------------------Right Section-------------------------- */}
 
         <div>  
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p> 
            <ul className='flex flex-col gap-2 text-gray-600'>
               
                <li>+1-212-456-78910</li>
                <li>chakor@1233gmail.com</li>
                
            </ul>  
         </div>

         </div>

         {/* {------COPYRIGHT--------} */}
         <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright@2024-Perscripto-All Right  Reserved</p>
         </div>
    </div>
  )
}

export default Footer