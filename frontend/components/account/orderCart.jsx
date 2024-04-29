// orderCart.jsx
"use client"
import OrderCartCard from "./orderCartCard"
import axiosInstance from "@/axios.config";
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "@/AuthContext";
import Link from 'next/link';

function orderCart() {
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

  const refetchCart = async () => { 
    if (!user) return;

    try {
      const response = await axiosInstance.get(`/carts/${user._id}`);
      setCartData(response.data);
    } catch (error) {
      // ... handle errors ...
    }
  };
  
  return (
    <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px] flex justify-between items-center">
            <div className="">Order Cart</div>
            <Link href="/purchase"><div className=" w-max px-5 py-1 bg-[rgb(237,32,64)] rounded-[4px] font-medium text-[14px] flex justify-center items-center text-white">Checkout</div></Link>
          </div>
          <div className="w-11/12 md:w-full mx-auto  flex flex-wrap justify-center md:justify-between">
            {cartData && cartData.items.map((item) => (
              <OrderCartCard 
                key={item.course._id} // Use the course's ID as a key
                className={item.course.title}
                teacherName={item.course.instructorName}
                teacherRole={item.course.instructorRole}
                img={item.course.thumbnailImageURL || '/Class1.png'} 
                price={item.course.price}
                id={item.course._id}
                userId={user._id}
                onDeleteSuccess={refetchCart}
              />
            ))}
          </div>
        </div>
  )
}

export default orderCart