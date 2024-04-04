import './homeContent.css';

export default function cardCard({ title, subtitle, imageSource, status }) {
    return (
        <div className={`card-container w-[352px] min-w-[352px] rounded-[16px] h-[381px] bg-[#252525] overflow-hidden`}>
            <img src={imageSource} alt="Logo" className='object-cover rounded-[16px] h-[220px]' />
            <div className='flex flex-col mx-4 h-[calc(100%-220px)] justify-center'>
                <div className='rounded-[0.25rem] px-[0.7rem] py-[0.25rem] border w-max font-normal text-xs border-[#F9858D] text-[#F9858D]'>{status}</div>
                <div className='h-[0.7rem] w-full border-b border-b-[#414141] mb-3'></div>
                <div className='text-base font-bold mb-3:'>{title}</div>
                <div className={`text-sm font-light text-[#A0A0A0]`}>{subtitle}</div>
            </div>
        </div>
    );
  };
  