import React from 'react'
import {motion} from 'motion/react'

const HeroBooking = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5,  }} viewport={{ once: true }}
    className='bg-[#FFFFFF] rounded-2xl mt-[100px] md:w-5/6 2xl:pl-[100px]  md:h-[216px] md:grid '>
        <form action="" className='grid md:flex md:justify-between'>
            <div className='p-5  grid md:grid-cols-2 xl:grid-cols-4 gap-10  md:items-center 2xl:pr-[100px] '>

                <div className='grid gap-3'>
                    <label htmlFor="destination" className='text-[#767E86] text-sm'>DESTINATION</label>
                    <input id='destination' type="text" className='bg-transparent border-0 border-b-2 border-b-[#000000] text-sm text-[#172432]'/>
                </div>
                
                <div className='grid gap-3'>
                    <label htmlFor="person" className='text-[#767E86] text-sm'>PERSON</label>
                    <input id='person' type="number" className='bg-transparent border-0 border-b-2 border-b-[#000000] text-sm text-[#172432]'/>
                </div>

                <div className='grid gap-3'>
                    <label htmlFor="in" className='text-[#767E86] text-sm'>CHECK IN</label>
                    <input id='in' type="date" className='bg-transparent border-0 border-b-2 border-b-[#000000] text-sm text-[#172432]'/>
                </div>

                <div className='grid gap-3'>
                    <label htmlFor="out" className='text-[#767E86] text-sm'>CHECK OUT</label>
                    <input id='out' type="date" className='bg-transparent border-0 border-b-2 border-b-[#000000] text-sm text-[#172432]'/>
                </div>
            </div>
            

            <button className='mt-[60px] md:mt-0 bg-[#FF7757] px-5 py-10  md:py-0 md:w-[170px]  rounded-b-2xl text-[36px] flex items-center justify-between gap-3'>
                Book Now

                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7071 8.7071C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928931C14.9526 0.538406 14.3195 0.538407 13.9289 0.928931C13.5384 1.31946 13.5384 1.95262 13.9289 2.34314L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.7071ZM8.74228e-08 9L21 9L21 7L-8.74228e-08 7L8.74228e-08 9Z" fill="white"/>
                </svg>
            </button>
        </form>
    </motion.div>
  )
}

export default HeroBooking