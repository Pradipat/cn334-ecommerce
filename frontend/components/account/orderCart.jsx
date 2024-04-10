import OrderCartCard from "./orderCartCard"

function orderCart() {
  return (
    <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px] flex justify-between items-center">
            <div className="">Order Cart</div>
            <div className=" w-max px-5 py-1 bg-[rgb(237,32,64)] rounded-[4px] font-medium text-[14px] flex justify-center items-center text-white">Checkout</div>
          </div>
          <div className="w-11/12 md:w-full mx-auto  flex flex-wrap justify-center md:justify-between">
            <OrderCartCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            <OrderCartCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            <OrderCartCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            <OrderCartCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            <OrderCartCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            <OrderCartCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
          </div>
        </div>
  )
}

export default orderCart