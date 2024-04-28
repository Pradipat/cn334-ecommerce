import "./products.css"

function commentCard({name,time,content,type}) {
  return (
        <div className="w-11/12 md:w-9/12 lg:w-[990px] mx-auto mb-[20px]">
            <div className="flex gap-[0.25rem] mb-[0.1rem] text-base text-[#A0A0A0]">
              <div>{name}</div>
              <div>•</div>
              <div>{time}</div>
              <div>•</div>
              {type === "Positive" ? (<div className=" text-green-600">positive</div>) 
              : type === "Negative" ? (<div className=" text-red-600">negative</div>) : 
              (<div className="">positive</div>)}
            </div>
            <div className="font-medium">
                {content}
            </div>
        </div>
    
  )
}

export default commentCard