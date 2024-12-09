interface Props {
    heading: string
    description: string
    buttons: boolean
}
import {Playfair_Display} from 'next/font/google'

const playfair = Playfair_Display({
    weight: '400',
    subsets: ['latin']
})

const Heading: React.FC<Props> = ({heading, description, buttons}) => {
  return (
    <div>
        <div>
        <h2 className={`${playfair.className} text-[54px] text-[#172432]    `}>{heading}</h2>
          <div className='w-4/5 md:w-2/5 lg:w-1/4 border-b-[3px] border-[#FF7757]'></div>

          <div className='flex items-center justify-between'>
            <p className='mt-[32px] text-2xl text-[#767E86]'>{description}</p>

            {
                buttons && (
                    <div className='hidden md:flex gap-10'>
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
                )
            }
            
          </div>
          
      </div>
    </div>
  )
}

export default Heading