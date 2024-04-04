
export default function cardCard() {
    return (
        <div className='h-[381px] w-[352px] bg-[#252525] rounded-[16px] overflow-hidden '>
            <img src="/Class1.png" alt="Logo" className='w-full h-[220px]'/>
            <div className='flex flex-col justify-center h-[calc(100%-220px)] mx-4'>
                <div className='rounded-[0.25rem] px-[0.7rem] py-[0.1rem] border w-max text-xs font-normal border-[#F9858D] text-[#F9858D]'>Now Available</div>
                <div className='h-[0.7rem] w-full border-b border-b-[#414141] mb-2'></div>
                <div className='text-base font-bold mb-3'>50 Chapter Guide to HTML , CSS , JS for Web Development</div>
                <div className=' text-sm font-light text-[#A0A0A0]'>Fullstack Dev, akkharawoot</div>
            </div>
        </div>
    );
  };
  