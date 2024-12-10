import React from 'react'
import logo from "../../public/Logo.png"
import Image from 'next/image'
import footerData from '../lib/FooterData'
import facebook from "../../public/facebook.png"
import pinterest from "../../public/pinterest.png"
import instagram from "../../public/instagram.png"
import twitter from "../../public/twitter.png"

const socials = [facebook, pinterest, instagram, twitter]

const Footer = () => {
  return (
    <div className='bg-[#172432] px-4 lg:px-8 pt-14 md:pt-[106px] pb-[80px] grid  gap-[60px] md:gap-[20px] md:flex md:justify-between'>
        <div>
            <Image src={logo} alt='logo' />
            <p className='pt-4 text-[14px] text-[#FFFFFF]'>Copyright © Travellian 2020 All rights reserved</p>
        </div>
        
        <div className='grid md:grid-cols-4 gap-[60px]'>
            {footerData.map((data, index) => (
                <div key={index} className='text-[#FFFFFF] grid gap-4'>
                    <p className='text-2xl md:text-lg lg:text-2xl font-medium '>{data.title}</p>
                    <div className=' grid gap-3'>{data.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                    ))}</div>
                </div>
            ))}

            <div>
                <p className='text-2xl md:text-base lg:text-2xl font-medium text-[#FFFFFF]'>Follow us on</p>
                <div className='flex space-x-6 md:space-x-4 lg:space-x-6 items-center pt-4'>
                    {socials.map((data, index) => (
                        <Image src={data} alt='logo' key={index}/>
                    ) )}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer