
function orderHistoryCard({className, teacherName, teacherRole, payment , price, time}) {
    return (
          <div className=" w-full bg-white text-black px-[14px] py-[14px] shadow-lg rounded-[13px] mb-5">
              <div className="flex items-center w-full">
                  <div className="flex flex-col w-full gap-4 px-2 py-1">
                    <div className="text-[16px]">
                        <div className="text-[#ED2040] font-semibold">Payment completed</div>
                        <div className="text-[#888888]">{time}</div>
                    </div>
                    <div className="text-black">
                        <div className=" font-semibold text-lg">{teacherRole}, {teacherName}</div>
                        <div className="text-[#333333] font-light">{className}</div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center text-center">
                            <div className="text-[16px] font-light text-[#888888]">Price</div>
                            <div className="text-[16px] font-light text-[#535353]">USD {price}</div>
                        </div>
                        <div className="flex justify-between items-center text-center">
                            <div className="text-[16px] font-light text-[#888888]">Discount Amount</div>
                            <div className="text-[16px] font-light text-[#535353]">-USD 0.00</div>
                        </div>
                        <div className="flex justify-between items-center text-center">
                            <div className="text-[16px] font-light text-[#888888]">Total Amount</div>
                            <div className="text-[16px] font-light text-[#535353]">USD {price}</div>
                        </div>
                        <div className="flex justify-between items-center text-center">
                            <div className="text-[16px] font-light text-[#888888]">Payment Method</div>
                            <div className="text-[16px] font-light text-[#535353]">{payment}</div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
    )
  }
  
  export default orderHistoryCard