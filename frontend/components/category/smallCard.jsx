function smallCard({ title, subtitle, imageSource}) {
  return (
        <div className="w w-[49%] md:w-[24%] mb-6">
            <img src={imageSource} alt="Logo" className='object-cover rounded-[16px] w-full' />
            <div className='flex flex-col justify-center'>
                <div className='text-xs font-semibold md:text-base md:h-[46px] h-[32px] h-max-[40px] overflow-hidden mb-2 mt-2 text-black leading-4'>{title}</div>
                <div className={`text-xs font-extralight md:text-sm text-[#A0A0A0]`}>{subtitle}</div>
            </div>
        </div>
  )
}

export default smallCard