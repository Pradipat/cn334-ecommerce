import './homeContent.css'

export default function categoryCard({ title, subtitle, imageSource, status }) {
  return (
        <div className={`card-container rounded-[16px] flex w-full h-[142px]  md:h-[23.8rem] md:w-[32%] lg:h-[381px] lg:w-[352px] md:flex-col mb-3.5 md:mb-6 md:rounded-[16px] md:overflow-hidden md:bg-[#252525]`}>
            <img src={imageSource} alt="Logo" className='w-2/6 object-cover rounded-[16px] md:mb-0 md:w-full md:h-[220px] md:rounded-none' />
            <div className='flex flex-col justify-start ml-4 my-4 md:mx-4 md:my-0 md:h-[calc(100%-220px)] md:justify-center'>
                <div className='rounded-[0.25rem] px-[0.4rem] md:px-[0.7rem] md:py-[0.1rem] border w-max font-normal text-base md:text-xs md:font-normal border-[#F9858D] text-[#F9858D]'>{status}</div>
                <div className='md:h-[0.7rem] md:w-full md:border-b border-b-[#414141] mb-3'></div>
                <div className='t text-base font-semibold leading-[1.35rem] md:text-base md:font-bold mb-2 md:min-[48px]:'>{title}</div>
                <div className={`text-sm font-light text-[#A0A0A0]`}>{subtitle}</div>
            </div>
        </div>
  )
}
