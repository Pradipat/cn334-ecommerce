// orderHistory.jsx
"use client"
import React, { useState, useEffect, useContext } from 'react';
import OrderHistoryCard from "./orderHistoryCard"
import axiosInstance from "@/axios.config";
import { AuthContext } from "@/AuthContext";

function orderHistory() {
  const { user } = useContext(AuthContext);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    const fetchPurchaseHistory = async () => {
      if (!user) return; // User must be logged in

      try {
        const response = await axiosInstance.get(`/purchaseHistories/${user._id}`); 
        setPurchaseHistory(response.data);
      } catch (error) {
        console.error('Error fetching purchase history:', error);
        // Handle the error (e.g., display an error message)
      }
    };

    fetchPurchaseHistory();
  }, [user]);
  return (
    <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px]">Order History</div>
          <div className="w-11/12 md:w-full mx-auto  flex flex-wrap justify-center md:justify-between">
            {purchaseHistory.map((order) => (
              <OrderHistoryCard 
                  key={order._id} // Assuming your orders have unique IDs
                  purchaseHistoryData={order} // Pass the individual order object
              />
            ))}
            {/* <OrderHistoryCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              price = {190.99}
              payment = "Paypal"
              time = "02/29/2024 06:42:29 (UTC-7)"
            /> */}
          </div>
        </div>
  )
}

export default orderHistory