// paymentSelect.jsx
"use client"
import axiosInstance from "@/axios.config"; 
import React, { useState } from "react";
import { useRouter } from 'next/navigation';

function paymentSelect({user, cartData, totalPrice}) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => { // New function to handle change
    setPaymentMethod(event.target.value); 
  };

  const handleCheckout = async () => { 
    if (!user) return; // Check for logged-in user

    try {
      const response = await axiosInstance.delete(`/carts/${user._id}`);
      console.log(response.data.message);
    } catch (error) {
      console.error('Error deleting cart during checkout:', error);
      // Handle the error (e.g., display an error message)
    }

    // Enroll user in courses from cartData
    if (user && cartData?.items) {
      try {
        for (const item of cartData.items) {
          await axiosInstance.post('/myClasses/', { 
            userId: user._id,
            courseId: item.course._id 
          });
        }

        console.log('User enrolled in courses successfully');
      } catch (error) {
        console.error('Error enrolling user in courses:', error);
        // Handle the error (e.g., display an error message)
      }
    }

    // Add purchase history creation
    if (user && cartData?.items) {
      try {
        const courseIds = cartData.items.map(item => item.course._id);

        await axiosInstance.post('/purchaseHistories/', {
          userId: user._id,
          courses: courseIds,
          totalPrice: totalPrice,
          payment: paymentMethod // Add the selected paymentMethod
        });
        console.log('Purchase history created successfully');
        alert("New Courses are added in Your MyClass.")
        router.push('/');

        // Proceed with other post-checkout actions (e.g., redirect to success page)
      } catch (error) {
        console.error('Error creating purchase history:', error);
        // Handle the error gracefully
      }
    }

    // Update course sold count
    try {
      const courseIds = cartData.items.map((item) => item.course._id);
      const updateResult = await axiosInstance.post("/courses/updateSoldCount", { courseIds });
      console.log("Course sold count updated:", updateResult.data);
    } catch (error) {
      console.error("Error updating sold count:", error);
      // Handle the error (e.g., display an error message)
    }

  };

  return (
        <div>
            <div className="w-11/12 lg:w-[1120px] mx-auto bg-white rounded-[15px] py-[20px] px-[20px] mt-[30px] mb-[30px]">
              <div className="text-black font-semibold text-2xl mb-3">Payment Method</div>
              <form className="text-black flex flex-col border border-[#b4b4b4] rounded-[5px] text-lg font-light mb-3">
                <label className="border-b border-[#b4b4b4] flex items-center py-3">
                  <input type="radio" name="paymentMethod" value="Credit Card" className="w-5 h-5 mx-3"
                    onChange={handlePaymentMethodChange}
                  />
                  <span>Credit Card</span>
                </label>
                <label className="flex items-center py-3">
                  <input type="radio" name="paymentMethod" value="PayPal" className="w-5 h-5 mx-3"
                    onChange={handlePaymentMethodChange}
                  />
                  <span>PayPal</span>
                </label>
              </form>
              <div className="text-[#898989] font-extralight">By creating an account, you agree to <span className="text-[#595959] font-medium">Term of Service </span> 
                  and  <span className="text-[#595959] font-medium">Privacy Policy </span>
                  <div>If you have any troubles processing the payments, please check if pop-ups are allowed.</div>
              </div>
            </div>

            <div 
              className="w-11/12 lg:w-[1120px] h-[53px] mx-auto bg-[#ED2040] rounded-[7px] mb-[60px] font-bold text-2xl flex justify-center items-center"
              onClick={handleCheckout}>
              Checkout
            </div>
        </div>
  )
}

export default paymentSelect