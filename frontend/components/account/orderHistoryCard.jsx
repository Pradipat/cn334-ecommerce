// orderHistoryCard.jsx
function orderHistoryCard({purchaseHistoryData}) {
    const formatPrice = (price) => {
        if (typeof price !== 'number') { // Check for undefined or non-numeric types 
            return 'Loading price...';  // Or another placeholder
        } 
        return price.toFixed(2); 
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            month: '2-digit', 
            day: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Bangkok', // Change the time zone
            timeZoneName: 'short' 
        };

        return date.toLocaleDateString('en-US', options); // Specify Thai locale 
    };

    return (
          <div className=" w-full bg-white text-black px-[14px] py-[14px] shadow-lg rounded-[13px] mb-5">
            <div className="flex items-center w-full">
                <div className="flex flex-col w-full gap-4 px-2 py-1">
                    <div className="text-[16px]">
                        <div className="text-[#ED2040] font-semibold">Payment completed</div>
                        <div className="text-[#888888]">{formatDate(purchaseHistoryData.createdAt)}</div> 
                    </div>

                    {purchaseHistoryData.courses.map((course) => (
                        <div className="text-black" key={course._id}> 
                            <div className="font-semibold text-lg">
                                {course.instructorRole}, {course.instructorName} 
                            </div>
                            <div className="text-[#333333] font-light">
                                {course.title} 
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center text-center">
                            <div className="text-[16px] font-light text-[#888888]">Price</div>
                            <div className="text-[16px] font-light text-[#535353]">USD {formatPrice(purchaseHistoryData.totalPrice)}</div>
                        </div>
                        <div className="flex justify-between items-center text-center">
                            <div className="text-[16px] font-light text-[#888888]">Discount Amount</div>
                            <div className="text-[16px] font-light text-[#535353]">-USD 0.00</div>
                        </div>
                        <div className="flex justify-between items-center text-center">
                            <div className="text-[16px] font-light text-[#888888]">Total Amount</div>
                            <div className="text-[16px] font-light text-[#535353]">USD {formatPrice(purchaseHistoryData.totalPrice)}</div>
                        </div>
                        <div className="flex justify-between items-center text-center">
                            <div className="text-[16px] font-light text-[#888888]">Payment Method</div>
                            <div className="text-[16px] font-light text-[#535353]">{purchaseHistoryData.payment}</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    )
  }
  
  export default orderHistoryCard