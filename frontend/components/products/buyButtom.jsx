import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faPercent,faRotateRight} from '@fortawesome/free-solid-svg-icons';
import "./products.css"

function butButtom({price, classStatus}) {
  return (
        <div className='flex flex-col items-center'>
            <div className="flex gap-5">
            <div className="flex flex-col w-10 md:w-14 text-center items-center gap-2">
              <div className="h-9 w-9 rounded-[12px] md:h-12 md:w-12 md:rounded-[18px] bg-[#484848] items-center flex justify-center">
              <FontAwesomeIcon className="h-3 w-3 md:h-4 md:w-4" icon={faPlay} /></div>
              <div className="text-xs md:text-sm">{classStatus}</div>
            </div>
            <div className="flex flex-col w-10 md:w-14 text-center items-center gap-2">
              <div className="h-9 w-9 rounded-[12px] md:h-12 md:w-12 md:rounded-[18px] bg-[#484848] items-center flex justify-center">
              <FontAwesomeIcon className="h-3 w-3 md:h-4 md:w-4" icon={faRotateRight} /></div>
              <div className="text-xs md:text-sm">Unlimited Access</div>
            </div>
            <div className="flex flex-col w-10 md:w-14 text-center items-center gap-2">
              <div className="h-9 w-9 rounded-[12px] md:h-12 md:w-12 md:rounded-[18px] bg-[#484848] items-center flex justify-center">
              <FontAwesomeIcon className="h-3 w-3 md:h-4 md:w-4" icon={faPercent} /></div>
              <div className="text-xs md:text-sm">Discount Coupons</div>
            </div>
          </div>

          <div className="flex gap-1 font-normal text-base items-center mt-[35px] mb-[20px]">
            <div className="">Starting at</div>
            <div className=" text-2xl font-medium mx-2">USD {price}</div>
            <div className="">Up to <span className="text-[#ED2040] font-bold mx-1">16%</span> off</div>
          </div>
          <div className="bg-[#ED2040] buyBtn w-[17rem] h-[2.7rem] rounded-md flex justify-center items-center text-base font-normal">Enroll Now</div>
        </div>
  )
}

export default butButtom