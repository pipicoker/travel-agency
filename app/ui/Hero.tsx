import React from 'react'
import {Playfair_Display} from 'next/font/google'
import HeroBooking from './HeroBooking'

const playfair = Playfair_Display({
    weight: '400',
    subsets: ['latin']
})
const Hero = () => {
    
  return (
    <div className='text-[#FFFFFF] py-[100px]'>
        <h1 className={`${playfair.className} text-[40px] md:text-[64px] lg:text-[84px] leading-tight md:leading-snug`}>Start your unforgettable <br className='hidden md:block'/> journey with us.</h1>
        <p className='text-lg md:text-2xl'>The best travel for your jouney begins now</p>

        <HeroBooking />
    </div>
  )
}

export default Hero