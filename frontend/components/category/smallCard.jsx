import Link from "next/link"

function smallCard({ title,imageSource, hover, handleHoverIn, handleHoverOut, id, instructorRole, instructorName,}) {
  return (
        <Link href={`/products/${id}`} className="w w-[49%] md:w-[24%] mb-6 overflow-hidden"
            onMouseOver={handleHoverIn}
            onMouseOut={handleHoverOut}
        >
            <div className="w-full rounded-[16px] overflow-hidden">
                <img src={imageSource} alt="Logo" className={`${hover ? "smallCardHover" : "smallCard"} rounded-[16px] w-full h-[168px] object-cover`} />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-xs font-semibold md:text-base md:h-max h-[32px] max-h-[40px] overflow-hidden mb-2 mt-2 text-black leading-4'>{title}</div>
                <div className="text-xs font-extralight md:text-sm  text-[#A0A0A0]">{instructorRole},{instructorName}</div>
            </div>
        </Link>
  )
}

export default smallCard