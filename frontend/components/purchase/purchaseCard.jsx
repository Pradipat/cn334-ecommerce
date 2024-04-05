export default function purchaseCard ({image,className,teacherRole,teacherName,price}) {
  return (
        <div>
            <div className="flex justify-between text-black font-semibold text-lg mt-2">
                <div className=""><span>{teacherRole}</span>,<span className="ml-1">{teacherName}</span></div>
                <div className="f font-normal text-base ">USD {price}</div>
            </div>
            <div className="flex bg-[#F2F2F2] rounded-[10px] px-2 py-2 gap-3">
                <img className="h-[61px] w-[61px] object-cover rounded-[5px]" src={image} alt="IconImage"></img>
                <div className="text-[#595959] flex flex-col justify-center">
                    <div className="text-sm font-medium">{className}</div>
                    <div className="text-sm font-light ">{teacherRole}, {teacherName} </div>
                </div>
            </div>
        </div>
  )
}
