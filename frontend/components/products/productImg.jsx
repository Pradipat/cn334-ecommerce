import "./products.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function productImg({teacherName,teacherRole,className,mainCategory,subCategory,classImg}) {
  return (
    <div className="flex flex-col relative w-full">
        <div className="relative h-[350px] md:h-[525px]">
            <div className="absolute w-full h-[350px] md:h-[525px] borderBgSide">
                <div className="h-[100%] borderBgButtom">
                </div>
            </div>
            <img className="h-full object-cover" src={classImg} alt="product_image"></img>
        </div>

        <div className="flex absolute bottom-0 flex-col justify-center items-center mb-6 w-full">
            <div className="flex gap-4 justify-center">
                <div className="text-sm md:text-base">{mainCategory}</div>
                <div className="text-[#A0A0A0] text-[0.5rem] md:text-xs content-center "><FontAwesomeIcon icon={faChevronRight} /></div>
                <div className="md:font-medium font-normal text-sm md:text-base">{subCategory}</div>
            </div>
            <div className="md:w-3/5 w-11/12 mt-6 mb-3 flex items-center text-2xl font-semibold md:text-4xl md:font-semibold text-center md:leading-[3rem]">{className}</div>
            <div className="flex text-base font-light md:text-lg md:font-extralight">
                <div>{teacherRole}</div>
                <div className="mr-1">,</div>
                <div>{teacherName}</div>
            </div>
        </div>
    </div>
    
  )
}

export default productImg