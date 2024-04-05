import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock,faCalendarCheck,faChartSimple,faCirclePlay,faLayerGroup } from '@fortawesome/free-solid-svg-icons';

function productDetail({classStatus,timeLimit,level,videoTotal,videoTime,price}) {
  return (
        <div className="flex flex-col-reverse md:flex-row w-10/12 lg:w-[960px] mx-auto mt-[60px] gap-14 md:gap-0">
            <div className="flex flex-col gap-3 w-full md:w-1/2 md:border-r md:border-[#515151] pb-7">
              <div className=" font-normal text-2xl mb-3">Class Details</div>
              <div className=" font-normal text-base">
                <FontAwesomeIcon className="mr-2.5 text-[#A0A0A0]" icon={faClock} />
                {classStatus}
              </div>
              <div className=" font-normal text-base">
                <FontAwesomeIcon className="mr-2.5 text-[#A0A0A0]" icon={faCalendarCheck} />
                {timeLimit}
              </div>
              <div className="text-base">
                <FontAwesomeIcon className="mr-2.5 text-[#A0A0A0]" icon={faChartSimple} />
                {level}
              </div>
              <div className="text-base">
                <FontAwesomeIcon className="mr-2.5 text-[#A0A0A0]" icon={faCirclePlay} />
                Total {videoTotal} videos, {videoTime[0]} Hours {videoTime[1]} Minutes
              </div>
              <div className="text-base">
                <FontAwesomeIcon className="mr-2.5 text-[#A0A0A0]" icon={faLayerGroup} />
                Class materials included
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="flex flex-col w-full md:w-9/12 justify-center">
                <div className=" font-medium text-sm">Up to
                  <span className="text-[#ED2040] text-base mx-1.5">18%
                  </span>off
                  <span className="text-[#A0A0A0] font-light mx-1.5 line-through">USD {price}</span>
                </div>
                <div className="flex justify-between items-center mb-4 mt-0.5">
                  <span className=" text-2xl font-semibold">USD 176.00 ~</span>
                  <span className="text-[#A0A0A0] font-medium text-sm">approx. price by currency</span>
                </div>
                <div className="flex justify-between border-t border-b border-[#3f3f3f] py-2">
                  <span className=" font-medium text-[0.85rem]">Discount Coupons</span>
                  <div><span className="text-[0.85rem]">Max</span><span className="text-[#ED2040] text-[0.85rem] font-semibold mx-1">USD 40.00</span></div>
                </div>
                <div className="flex justify-between border-b border-[#3f3f3f] py-2">
                  <span className=" font-medium text-[0.85rem]">Discount Coupons</span>
                  <div><span className="text-[0.85rem]">Max</span><span className="text-[#ED2040] text-[0.85rem] font-semibold mx-1">USD 40.00</span></div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default productDetail