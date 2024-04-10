
function orderCartCard({className, teacherName, teacherRole, img , price}) {
    return (
          <div className=" md:w-[357px] bg-white text-black px-[14px] py-[14px] shadow-lg rounded-[13px] mb-5">
              <div className="flex items-center">
                  <img src={img} className="h-[103px] w-[103px] object-cover rounded-[8px] mr-[10px]" alt="icon"></img>
                  <div className="flex flex-col">
                    <div className="text-[14px] font-bold leading-5">{className}</div>
                    <div className="text-[14px] font-light text-[#595959]">{teacherRole}, {teacherName}</div>
                    <div className="flex justify-between items-center text-center mt-2.5">
                        <div className="text-[14px] font-light text-[#595959]">USD {price}</div>
                        <div className=" w-max px-4 py-0.5 bg-[#595959] text-[12px] font-medium rounded-[4px] text-white flex justify-center items-center">Delete</div>
                    </div>
                  </div>
              </div>
          </div>
    )
  }
  
  export default orderCartCard