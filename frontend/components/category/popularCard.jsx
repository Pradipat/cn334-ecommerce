import Link from 'next/link';

function popularCard({ title, teacherName, teacherRole, imageSource, status, id }) {
  return (
    <Link href={`/products/${id}`}>
    <div className={`card-container w-[352px] min-w-[352px] rounded-[16px] h-[381px] `}>
        <img src={imageSource} alt="Logo" className='object-cover rounded-[16px] h-[220px]' />
        <div className='flex flex-col h-[calc(100%-220px)] justify-center'>
            <div className='rounded-[0.25rem] px-[0.7rem] py-[0.25rem] border w-max font-normal text-xs border-[#F9858D] text-[#F9858D] mb-3'>{status}</div>
            <div className='t text-black text-base font-bold mb-3'>{title}</div>
            <div className={`text-sm font-light text-[#A0A0A0]`}>{teacherRole}, {teacherName}</div>
        </div>
    </div>
    </Link>
  )
}

export default popularCard