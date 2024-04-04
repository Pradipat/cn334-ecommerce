import './category.css';

function subCatagoryBar() {
  return (
    <div className="flex gap-2">
          <div className="bg-[#4D4D4D] rounded-[5px] px-3 py-1 font-extralight text-base text-center">All</div>
          <div className="subCatagoryBtn bg-[#F2F2F2] text-[#4D4D4D] rounded-[5px] px-3 py-1 font-extralight text-base text-center">All</div>
          <div className="subCatagoryBtn bg-[#F2F2F2] text-[#4D4D4D] rounded-[5px] px-3 py-1 font-extralight text-base text-center">All</div>
          <div className="subCatagoryBtn bg-[#F2F2F2] text-[#4D4D4D] rounded-[5px] px-3 py-1 font-extralight text-base text-center">All</div>
        </div>
  )
}

export default subCatagoryBar