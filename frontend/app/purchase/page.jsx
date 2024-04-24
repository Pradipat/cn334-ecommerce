// page.jsx
"use client"
import PurchaseCard from "@/components/purchase/purchaseCard"
import OrdersummaryCard from "@/components/purchase/ordersummaryCard"
import PaymentSelect from "@/components/purchase/paymentSelect"
import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from "@/axios.config";
import { AuthContext } from "@/AuthContext";

export default function Page() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData(user);
    } else {
      setUserData(null);
    }
  }, [user]);
  

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return; // User must be logged in

      try {
        const response = await axiosInstance.get(`/carts/${user._id}`);
        setCartData(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
        // Handle the error (e.g., display an error message)
      }
    };

    fetchCart();
  }, [user]);

  const formatPrice = (price) => {
    if (typeof price !== 'number') { 
        return 'Loading price...';  
    } 
    return price.toFixed(2); 
  };

  const calculateTotalPrice = (cartData) => {
    if (!cartData?.items) return 0; // Handle if cartData is not available 

    let totalPrice = cartData.items.reduce((total, item) => {
        return total + item.course.price; 
    }, 0); // Start with an initial total of 0

    return totalPrice;
};

      return (
          <div className="w-full bg-[#F2F2F2] flex flex-col  items-center pt-[60px]">
            <div className="w-11/12 lg:w-[1120px] mx-auto bg-white rounded-[15px] py-[20px] px-[20px]">

              <div className="text-black font-semibold text-2xl mb-3">Class Summary</div>
              {cartData && cartData.items.map((item) => (
                    <PurchaseCard
                        key={item.course._id}
                        price={formatPrice(item.course.price)}
                        teacherName={item.course.instructorName}
                        teacherRole={item.course.instructorRole}
                        className={item.course.title}
                        image={item.course.thumbnailImageURL || './Class1.png'}
                    />
                ))}
            </div>


            <div className="w-11/12 lg:w-[1120px] mx-auto bg-white rounded-[15px] py-[20px] px-[20px] mt-[30px]">
              <div className="text-black font-semibold text-2xl mb-3">Order Summary</div>
              <div className="pb-3">
                {cartData && cartData.items.map((item) => (
                  <OrdersummaryCard
                    key={item.course._id}
                    price={formatPrice(item.course.price)}
                    className={item.course.title}
                  />
                ))}
              </div>
              <div className="flex justify-between text-black font-semibold text-xl mt-2 border-t border-[#dadada] pt-3">
                <div className="">Total Amount</div>
                <div className="font-semibold text-xl ">USD {formatPrice(calculateTotalPrice(cartData))}</div>
              </div>
            </div>

            <PaymentSelect
             user = {user}
             cartData = {cartData}
             totalPrice = {calculateTotalPrice(cartData)}
            />

          </div>
      )
    }
    
    
    