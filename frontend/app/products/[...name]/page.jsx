"use client"
import ProductImg from "@/components/products/productImg";
import BuyButtom from "@/components/products/buyButtom";
import ProductDetail from "@/components/products/productDetail";
import axiosInstance from "@/axios.config";
import React, { useState, useEffect } from 'react';

export default function Page({params}) {
    const [productId, name] = params.name;
    const [productData, setProductData] = useState("");

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axiosInstance.get(`/courses/id/${productId}`);
          setProductData(response.data); // Assuming your API returns the course data
        } catch (error) {
          console.error('Error fetching product:', error);
          // Handle error (e.g., display an error message)
        }
      };
  
      fetchProduct();
    }, [productId]);

    const formatPrice = (price) => {
      if (typeof price !== 'number') { // Check for undefined or non-numeric types 
          return 'Loading price...';  // Or another placeholder
      } 
      return price.toFixed(2); 
  };
      return (
        <div className="w-full bg-black flex flex-col justify-center items-center">
          <div className="w-11/12 lg:w-[1120px] mx-auto">
            <ProductImg 
              teacherName={productData.instructorName}
              teacherRole={productData.instructorRole}
              className={productData.title}
              mainCategory={productData.mainCategory}
              subCategory={productData.subCategory}
              classImg={productData.backgroundImageURL || '/productBanner.png'}
            />
          </div>

          <BuyButtom 
            price={formatPrice(productData.price)} 
            classStatus="Now Available"
            id={productData._id}
          />

          <ProductDetail 
            classStatus="Now Available"
            timeLimit="Unlimited Access"
            level={productData.level}
            videoTotal={productData.totalVideos}
            videoTime={productData.totalTime}
            price={formatPrice(productData.price)} 
          />

          <div className="w-11/12 md:w-9/12 lg:w-[990px] mx-auto my-[60px] ">
            <div className=" font-semibold text-3xl mb-3">{productData.descriptionTopic}</div>
            <div className="text-[#A0A0A0] font-light text-xl">{productData.descriptionContent}</div>
          </div>



          {/* <div className="w-11/12 lg:w-[1120px] mx-auto">
            <ProductImg 
              teacherName="DOKSA"
              teacherRole="Concept Artist"
              className="The 50-Chapter Guide to Character Design for Beginners"
              mainCategory="Illustration"
              subCategory="Characters"
              classImg="/productBanner.png"
            />
          </div>

          <BuyButtom 
            price={190.99}
            classStatus="Now Available"
          />

          <ProductDetail 
            classStatus="Now Available"
            timeLimit="Unlimited Access"
            level="Beginner"
            videoTotal={25}
            videoTime={[29,40]}
            price={190.99}
          />

          <div className="w-11/12 md:w-9/12 lg:w-[990px] mx-auto my-[60px] ">
            <div className=" font-semibold text-3xl mb-3">Master the Art with Guweiz, the Illustrator with 1M+ Follower</div>
            <div className="text-[#A0A0A0] font-light text-xl">Master art fundamentals and advanced techniques with Guweiz, who has collaborated with industry giants like Bandai Namco, Mynet, Gamefreak, Square Enix, Pixiv, and more. Gain insights into professional techniques and tools to enhance your artistic journey.</div>
          </div> */}

        </div>
      )
    }    