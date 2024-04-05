
function myClassCard({className, teacherName, teacherRole, img}) {
  return (
        <div className="w-[357px] bg-white text-black px-[17px] py-[17px] shadow-lg rounded-[13px] mb-5">
            <div className="flex mb-2 items-center">
                <img src={img} className="h-[66px] w-[66px] object-cover rounded-[8px] mr-[10px]" alt="icon"></img>
                <div className="flex flex-col">
                  <div className="text-[16px] font-bold leading-5">{className}</div>
                  <div className="text-[16px] font-light text-[#595959]">{teacherRole}, {teacherName}</div>
                </div>
            </div>
            <div className="w-full h-[32px] bg-[#ED2040] text-[16px] font-bold rounded-[4px] text-white flex justify-center items-center">Play</div>
        </div>
  )
}

export default myClassCard