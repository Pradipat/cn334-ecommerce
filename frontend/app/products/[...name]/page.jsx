"use client"
import ProductImg from "@/components/products/productImg";
import BuyButtom from "@/components/products/buyButtom";
import CommentCard from "@/components/products/commentCard";
import ProductDetail from "@/components/products/productDetail";
import axiosInstance from "@/axios.config";
import moment from 'moment'; 
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "@/AuthContext";

export default function Page({params}) {
    const [productId, name] = params.name;
    const [productData, setProductData] = useState("");
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const { user } = useContext(AuthContext);

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

    const fetchComments = async () => {
        try {
            const response = await axiosInstance.get(`/comments/course/${productId}`);
            setComments(response.data);

        } catch (error) {
            console.error('Error fetching comments:', error);
            // Handle error (display an error message)
        }
      }

      fetchComments();
    }, [productId]);


    const formatPrice = (price) => {
      if (typeof price !== 'number') { // Check for undefined or non-numeric types 
          return 'Loading price...';  // Or another placeholder
      } 
      return price.toFixed(2); 
    };

    const handleSubmitComment = async (e) => {
      e.preventDefault(); 
    
      try {
        const response = await axiosInstance.post('/comments/', {
          content: newComment,
          userId: user._id,
          courseId: productId
        });
    
        // Success!
        console.log('Comment submitted:', response.data);
        setNewComment('');

        // Refetch Comments
        const fetchComments = async () => { 
          try {
              const response = await axiosInstance.get(`/comments/course/${productId}`); 
              setComments(response.data);
          } catch (error) {
              console.error('Error fetching comments:', error);
          }
        };
        fetchComments();

      } catch (error) {
        console.error('Error submitting comment:', error);
        // Handle the error, display an error message to the user
      }
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

        {user ?
          <div className="w-11/12 md:w-9/12 lg:w-[990px] mx-auto mb-[20px]">
            <div className="mb-4 font-semibold text-lg">Review</div> 
              <textarea 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 text-[#A0A0A0]" 
                  placeholder="Write your review here..."
                  value={newComment} 
                  onChange={(event) => setNewComment(event.target.value)} 
                  rows="4" 
              />
            <button className="bg-[#da1633] hover:bg-[#da1633] text-white font-medium py-2 px-4 rounded-md" 
                    onClick={handleSubmitComment}
            >
              Submit Review
            </button>
          </div>
          : " "}

          {comments.map((comment) => (
            <CommentCard 
              name={comment.user?.name || 'Unknown User'}
              time={moment(comment.createdAt).format('YYYY-MM-DD')}
              content={comment.content}
            />
          ))}

          <div className="w-11/12 md:w-9/12 lg:w-[990px] mx-auto mb-[60px]"></div>
        </div>
      )
    }    