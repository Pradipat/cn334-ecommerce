function ordersummaryCard({price,className}) {
  return (
        <div className="flex justify-between text-[#595959] font-light text-base md:text-lg ">
            <div className="">{className}</div>
            <div className="hidden md:block font-light text-lg ">USD {price}</div>
        </div>
  )
}

export default ordersummaryCard