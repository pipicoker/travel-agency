"use client"
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image'
import logo from '../../public/Logo.png'
import NavData from '../lib/NavData'

const Header = () => {
  const [navState, setNavState] = useState(false)

  const navControl = () => {
    setNavState(!navState)
    console.log(navState);
  }
  return (
    <header className=' py-6 px-4 md:flex justify-between items-center'>
      <div className='flex justify-between'>
        <Image src={logo} alt='logo' priority/>

        <div onClick={navControl} className='md:hidden'>
          <svg width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.29167 2.58333C0.716375 2.58333 0.25 2.11696 0.25 1.54167C0.25 0.966375 0.716375 0.5 1.29167 0.5H36.7083C37.2835 0.5 37.75 0.966375 37.75 1.54167C37.75 2.11696 37.2835 2.58333 36.7083 2.58333H1.29167ZM1.29167 13C0.716375 13 0.25 12.5335 0.25 11.9583C0.25 11.3831 0.716375 10.9167 1.29167 10.9167H36.7083C37.2835 10.9167 37.75 11.3831 37.75 11.9583C37.75 12.5335 37.2835 13 36.7083 13H1.29167ZM1.29167 23.4167C0.716375 23.4167 0.25 22.9502 0.25 22.375C0.25 21.7998 0.716375 21.3333 1.29167 21.3333H36.7083C37.2835 21.3333 37.75 21.7998 37.75 22.375C37.75 22.9502 37.2835 23.4167 36.7083 23.4167H1.29167Z" fill="white"/>
          </svg>
        </div>
      </div>
      
      {/* <nav className={`md:gap-8 ${navState === false ? 'hidden md:flex' : 'grid md:flex'
      }`}>
        
        {NavData.map((nav, index) => (
            <a href={nav.path} key={index} className=' text-xl text-[#FFFFFF]'>
              {nav.title}
            </a>
            
        ))}
      </nav> */}

      <nav className='hidden md:flex items-center md:gap-4 lg:gap-8'>
        
        {NavData.map((nav, index) => (
            <a href={nav.path} key={index} className=' lg:text-xl text-[#FFFFFF]'>
              {nav.title}
            </a>
            
        ))}
      </nav>



      <div className='hidden md:flex md:gap-9 md:items-center text-[#FFFFFF] lg:text-xl'>
        <button>Login</button>

        <button className='bg-[#FF7757] text-white px-6 py-[16px] lg:px-8 lg:py-[20px] rounded-xl'>Sign Up</button>
      </div>

      <div
        className={`md:hidden items-end md:space-x-8 pt-12 pb-6 text-left ${
          navState
            ? 'block fixed top-0 right-0 h-full w-screen bg-[#172432] z-50 ease-in duration-500 transform translate-x-0'
            : 'fixed top-0 right-0 h-full w-screen bg-[#172432] z-50 ease-out duration-300 transform translate-x-full'
        }`}
          >
        {/* Close button */}
        <div
          className="flex justify-end px-12 text-[#FFFFFF] text-4xl"
          onClick={() => setNavState(false)}
        >
          <AiOutlineClose />
        </div>

        {/* Navigation Items */}
        <ul className="flex flex-col space-y-6 divide-y divide-pry">
          {NavData.map((data, index) => (
            <a
              href={data.path as string}
              key={index}
              className="text-lg font-semibold cursor-pointer pl-8 pt-6 text-[#FFFFFF]"
            >
              {data.title}
            </a>
          ))}
        </ul>

        <div className='mt-8 grid gap-6 px-8 md:items-center text-[#FFFFFF] lg:text-xl'>
        <button>Login</button>

        <button className='bg-[#FF7757] text-white px-6 py-[16px] rounded-xl'>Sign Up</button>
      </div>
      </div>


      
    </header>
  )
}

export default Header