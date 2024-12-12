import React from 'react'
import Heading from './Heading'
import TripPlannersData from '../lib/TripPlannersData'
import Image from 'next/image'
import rating from '../../public/Rating.png'
import {Playfair_Display} from 'next/font/google'
import TripPlannersSwiper from './TripPlannersSwiper'
import {motion} from 'motion/react'

const playfair = Playfair_Display({
    weight: '400',
    subsets: ['latin']
})

const TripPlanners = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 1,  }}
    className='px-4 sm:pr-12 md:pr-0  lg:px-[90px]  pb-[80px] md:pb-[100px] lg:pb-[140px] grid lg:grid-cols-5 gap-8 lg:gap-20 lg:items-center '>

        <div className='grid md:col-span-2  gap-8'>

            <Heading heading='Trip planners' description='20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.' buttons={false}/>

            <div className='relative'>
                <div className='w-[43px] h-[43px] bg-[#172432] -mb-4'></div>
                <button className='p-5 bg-[#FF7757] ml-6 rounded-xl text-lg text-[#FFFFFF]'>View all trip plans</button>
                <div className='w-[43px] h-[43px] bg-[#767E86] ml-[180px] -mt-6'></div>
            </div>
        </div>
        
       
        

        <div className='grid lg:hidden gap-10 text-[#172432]'>
            {TripPlannersData.map((data, index) => (
                <motion.div key={index}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1,  delay: 0.5}}>
                    <Image src={data.src} alt='picture of the place' className='h-[320px] sm:h-[350px] rounded-[26px] '/>

                    <div className='pt-3 grid gap-3'>
                        <div className='flex justify-between items-center text-lg'>
                            <p>GUIDED TOUR</p>
                            <p>${data.price}/Day</p>
                        </div>

                        <div>
                            <p className={`${playfair.className} font-semibold text-[28px]`}>{data.place}</p>
                            <div className='flex justify-between items-center '>
                                <Image src={rating} alt='ratings' />
                                <p className='text-lg'>{data.days} Days tour</p>
                            </div>
                        </div>
                            
                        
                    </div>

                </motion.div>
            ))}
        </div>


        <div className='hidden lg:block col-span-3 '>
            <TripPlannersSwiper />
        </div>
        
    </motion.div>
  )
}

export default TripPlanners