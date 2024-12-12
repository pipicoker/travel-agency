import React  from 'react'
import {Playfair_Display} from 'next/font/google'
import HeroBooking from './HeroBooking'
import {motion} from 'motion/react'

const playfair = Playfair_Display({
    weight: '400',
    subsets: ['latin']
})
const Hero = () => {

  return (
    <div >
      <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1 }} 
    
    className='text-[#FFFFFF] py-[100px]'>
        <h1 className={`${playfair.className} text-[40px] md:text-[64px] lg:text-[84px] leading-tight md:leading-snug`}>Start your unforgettable <br className='hidden md:block'/> journey with us.</h1>
        <p className='text-lg md:text-2xl'>The best travel for your jouney begins now</p>

        <HeroBooking />
    </motion.div>
    </div>
  )
}

export default Hero