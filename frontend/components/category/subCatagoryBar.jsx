"use client"
import './category.css';
import Link from 'next/link';
import axiosInstance from "@/axios.config";
import React, { useState, useEffect } from 'react';

function subCatagoryBar({mainCategory}) {
  const [subCatagory, setSubCatagory] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosInstance.get(`/categories/subcategories/${mainCategory}`);
                setSubCatagory(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
                // Handle the error (display a message, etc.)
            }
        };

        fetchCourses();
    }, [mainCategory]);
  return (
    <div className="flex gap-2">
          <Link href="/category/Programming/all"><div className="bg-[#4D4D4D] rounded-[5px] px-3 py-1 font-extralight text-base text-center">All</div></Link>
          <div className="subCatagoryBtn bg-[#F2F2F2] text-[#4D4D4D] rounded-[5px] px-3 py-1 font-extralight text-base text-center">All</div>
          <div className="subCatagoryBtn bg-[#F2F2F2] text-[#4D4D4D] rounded-[5px] px-3 py-1 font-extralight text-base text-center">All</div>
          <div className="subCatagoryBtn bg-[#F2F2F2] text-[#4D4D4D] rounded-[5px] px-3 py-1 font-extralight text-base text-center">All</div>
        </div>
  )
}

export default subCatagoryBar