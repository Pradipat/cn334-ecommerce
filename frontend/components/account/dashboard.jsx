"use client"
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axiosInstance from "@/axios.config";
import CourseCountChartComponent from './CourseCountChartComponent';

function dashboard() {
  const [courseSalesData, setCourseSalesData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axiosInstance.get('/courses/sortBySales/all'); 
        setCourseSalesData(response.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseData();
  }, []);
  
  return (
    <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px]">Dashboard</div>
          <div className="w-11/12 md:w-full mx-auto  flex flex-wrap justify-center md:justify-between">
            {courseSalesData.length > 0 && <CourseCountChartComponent courseData={courseSalesData} />}
          </div>
    </div>
  )
}

export default dashboard