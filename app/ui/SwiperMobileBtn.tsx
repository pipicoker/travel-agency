import React from 'react'
interface Props {
    mobileBtn : boolean
}

const SwiperMobileBtn:React.FC<Props> = ({mobileBtn}) => {
  return (
    <div>
        {mobileBtn && (
            <div className='mt-[100px] flex md:hidden justify-center gap-10'>
            <div className="custom-prev bg-[#172432] px-5 py-7">
            <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11L11 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
    
        <div className="custom-next bg-[#FF7757] px-5 py-7">
          <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21L11 11L0.999999 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
        )}
    </div>
  )
}

export default SwiperMobileBtn