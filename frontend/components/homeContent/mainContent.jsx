"use client"
import CardCard from "./classCard";
import axiosInstance from "@/axios.config";
import React, { useState, useEffect } from 'react';

export default function MainContent() {
const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    const fetchTopCourses = async () => {
      try {
        const response = await axiosInstance.get('/courses/sortBySales/all');
        setTopCourses(response.data.slice(0, 3)); // Get top 3
      } catch (error) {
        console.error('Error fetching courses:', error);
        // Handle error (e.g., display an error message)
      }
    }
    fetchTopCourses(); 
  }, []); 

  return (
       <div className='flex flex-col w-full md:w-full lg:w-[1120px] mx-auto'>
            <div className='font-medium text-xl mt-12 mb-4'>Best of Month</div>
            <div className='flex gap-8 md:justify-between overflow-auto md:overflow-visible'>
                {topCourses.map((course) => ( 
                    <CardCard 
                        key={course._id}
                        title={course.title} 
                        teacherRole={course.instructorRole}
                        teacherName={course.instructorName}
                        imageSource={course.thumbnailImageURL || '/Class1.png'} 
                        status="Now Available"
                        id={course._id} 
                    />
                ))} 
            </div>
       </div>
  );
};
