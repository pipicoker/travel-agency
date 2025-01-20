import React from 'react'
import {Playfair_Display} from 'next/font/google'
import {motion} from 'motion/react'

const playfair = Playfair_Display({
  weight: '400',
  subsets: ['latin']
})

const Newsletter = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5,  }} viewport={{ once: true }}
     className='bg-[#FFFFFF] mx-4 lg:mx-[90px] px-5 py-10 md:px-10 md:py-[60px] lg:px-[80px]  border gap-[60px] grid  text-[#767E86] drop-shadow-md sm:flex sm:justify-between sm:items-center rounded-[20px] md:rounded-[26px] '>
        <p className={`${playfair.className} text-[40px] md:text-[54px] lg:text-[64px]`}>Our Newsletter</p>

        <form action="" className='grid lg:flex lg:items-end sm:justify-between  text-[20px] gap-8'>
            <div className='grid'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter your email' className='text-center mt-4 bg-[#FFE8D4] py-6 rounded-xl text-[#FF7757]'/>
            </div>
            

            <button className='bg-[#FF7757] text-[#FFFFFF] py-4 rounded-xl lg:w-[163px] lg:h-[72px]'>Subscribe</button>
        </form>
    </motion.div>
  )
}

export default Newsletter