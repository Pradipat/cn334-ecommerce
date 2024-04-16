// orderCartCard.jsx
"use client"
import axiosInstance from "@/axios.config";
import React, { useState, useEffect } from 'react';

function orderCartCard({className, teacherName, teacherRole, img , price, id, userId, onDeleteSuccess}) {
    const formatPrice = (price) => {
        if (typeof price !== 'number') { // Check for undefined or non-numeric types 
            return 'Loading price...';  // Or another placeholder
        } 
        return price.toFixed(2); 
      };

      const handleDelete = async () => {
        try {
    
          const response = await axiosInstance.delete(`/carts/${userId}/items/${id}`);
          console.log(response.data.message); // Log the success message
    
          alert("delete this courese from Cart");
          onDeleteSuccess();
        } catch (error) {
          console.error('Error deleting course:', error);
          // Handle the error (e.g., display an error message to the user)
        }
      };
    return (
          <div className=" md:w-[357px] bg-white text-black px-[14px] py-[14px] shadow-lg rounded-[13px] mb-5">
              <div className="flex items-center h-full">
                  <img src={img} className="h-[103px] w-[103px] object-cover rounded-[8px] mr-[10px]" alt="icon"></img>
                  <div className="flex flex-col w-full justify-between h-full">
                    <div>
                    <div className="text-[14px] font-bold leading-5">{className}</div>
                    <div className="text-[14px] font-light text-[#595959]">{teacherRole}, {teacherName}</div>
                    </div>
                    <div className="flex justify-between items-end text-center mt-2.5">
                        <div className="text-[14px] font-light text-[#595959]">USD {formatPrice(price)}</div>
                        <div onClick={handleDelete} className=" w-max px-4 py-0.5 bg-[#595959] text-[12px] font-medium rounded-[4px] text-white flex justify-center items-center cursor-pointer">Delete</div>
                    </div>
                  </div>
              </div>
          </div>
    )
  }
  
  export default orderCartCard