import React from 'react'
import Heading from './Heading'
import blogPix from "../../public/blogPix.jpg"
import Image from 'next/image'
import {Playfair_Display} from 'next/font/google'
import {motion} from 'motion/react'

const playfair = Playfair_Display({
    weight: '400',
    subsets: ['latin']
})

const Blog = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.5,  }} viewport={{ once: true }}
    id='blog'
    className='px-4 lg:px-[90px]  pb-[80px] md:pb-[100px] lg:pb-[140px]'>
        <Heading heading='Our Blog' description='An insight to the incredible experience in the world' buttons= {false}/>

        <div className='mt-[100px] grid md:grid-cols-2  md:items-center gap-8'>
            <Image src={blogPix} alt='Blog picture' className=' h-[314px] sm:h-[555px]  rounded-[26px] '/>

            <div className=' text-[#172432] grid gap-6'>
                <p className={`${playfair.className} text-[40px] `}>Beautiful Italy
                Let’s travel</p>

                <p className='text-lg'>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.
                </p>

                <button className='flex items-center gap-5 text-2xl text-[#FF7757]'>
                Read More
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.7071 8.7071C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928931C14.9526 0.538406 14.3195 0.538407 13.9289 0.928931C13.5384 1.31946 13.5384 1.95262 13.9289 2.34314L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.7071ZM8.74228e-08 9L21 9L21 7L-8.74228e-08 7L8.74228e-08 9Z" fill="#FF7757"/>
                </svg>
            </button>
            </div>

            
        </div>
    </motion.div>
  )
}

export default Blog