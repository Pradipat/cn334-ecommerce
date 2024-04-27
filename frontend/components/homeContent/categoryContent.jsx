"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CategoryCard from "./categoryCard.jsx"
import axiosInstance from "@/axios.config";

export default function categoryContent({category}) {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axiosInstance.get(`/courses/${category}`);
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
                // Handle the error (display a message, etc.)
            }
        };

        fetchCourses();
    }, [category]);
  return (
    <div className="w-11/12 mx-auto lg:w-[1120px] mt-[60px] overflow-hidden">
        <div className="mb-4 text-xl font-medium">{category}</div>
        <div className="flex flex-wrap justify-between w-full ">
            {courses.slice(0, 6).map((course) => (
                <CategoryCard 
                    key={course._id}
                    title={course.title}
                    teacherRole={course.instructorRole}
                    teacherName={course.instructorName}
                    imageSource={course.thumbnailImageURL || '/Class1.png'} // Default image if needed
                    status="Now Available" // Assuming this is consistent 
                    id={course._id}
                />
            ))}
        </div>
        
        
        <div className='flex gap-1 justify-end text-[#F9858D] text-base font-light items-center '><div>view more</div><FontAwesomeIcon icon={faArrowRight} /></div>
    </div>
    
  )
}