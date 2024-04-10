import OrderHistoryCard from "./orderHistoryCard"

function orderHistory() {
  return (
    <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px]">Order History</div>
          <div className="w-11/12 md:w-full mx-auto  flex flex-wrap justify-center md:justify-between">
            <OrderHistoryCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              price = {190.99}
              payment = "Paypal"
              time = "02/29/2024 06:42:29 (UTC-7)"
            />
            <OrderHistoryCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              price = {190.99}
              payment = "Paypal"
              time = "02/29/2024 06:42:29 (UTC-7)"
            />
            <OrderHistoryCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              price = {190.99}
              payment = "Paypal"
              time = "02/29/2024 06:42:29 (UTC-7)"
            />
          </div>
        </div>
  )
}

export default orderHistory