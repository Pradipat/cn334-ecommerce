import PurchaseCard from "@/components/purchase/purchaseCard"
import OrdersummaryCard from "@/components/purchase/ordersummaryCard"
import PaymentSelect from "@/components/purchase/paymentSelect"

export default function Page() {
      return (
          <div className="w-full bg-[#F2F2F2] flex flex-col  items-center pt-[60px]">
            <div className="w-11/12 lg:w-[1120px] mx-auto bg-white rounded-[15px] py-[20px] px-[20px]">

              <div className="text-black font-semibold text-2xl mb-3">Class Summary</div>
              <PurchaseCard
                price={180.99}
                teacherName="Erak Note"
                teacherRole="Concept Artist"
                className="Step-by-Step Realistic Face Coloring"
                image="./Class1.png"
              />
              <PurchaseCard
                price={180.99}
                teacherName="Erak Note"
                teacherRole="Concept Artist"
                className="Step-by-Step Realistic Face Coloring"
                image="./Class1.png"
              />
            </div>


            <div className="w-11/12 lg:w-[1120px] mx-auto bg-white rounded-[15px] py-[20px] px-[20px] mt-[30px]">
              <div className="text-black font-semibold text-2xl mb-3">Order Summary</div>
              <div className="pb-3">
              <OrdersummaryCard 
                price={180.99}
                className="Step-by-Step Realistic Face Coloring"
              />
              <OrdersummaryCard 
                price={180.99}
                className="Step-by-Step Realistic Face Coloring"
              />
              <OrdersummaryCard 
                price={180.99}
                className="Step-by-Step Realistic Face Coloring"
              />
              </div>
              <div className="flex justify-between text-black font-semibold text-xl mt-2 border-t border-[#dadada] pt-3">
                <div className="">Total Amount</div>
                <div className="font-semibold text-xl ">USD 180.00</div>
              </div>
            </div>

            <PaymentSelect />

          </div>
      )
    }
    
    
    