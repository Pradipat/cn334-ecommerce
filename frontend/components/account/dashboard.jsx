"use client"
import React, { useEffect, useRef, useState, useContext } from 'react';
import Chart from 'chart.js/auto';
import axiosInstance from "@/axios.config";
import CourseCountChartComponent from './CourseCountChartComponent';
import { AuthContext } from "@/AuthContext";

function dashboard() {
  const [courseSalesData, setCourseSalesData] = useState([]);
  const [totalOrderCount, setTotalOrderCount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const chartRef = useRef(null);
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    
    const fetchCourseData = async () => {
      try {
        const response = await axiosInstance.get('/courses/sortBySales/all'); 
        setCourseSalesData(response.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    const fetchOrderCount = async () => { 
      try {
        const response = await axiosInstance.get(`/admin/${user._id}/getallsold`);
        setTotalOrderCount(response.data);
      } catch (error) {
        console.error('Error fetching order count:', error);
        // Handle error gracefully
      }
    };

    const fetchTotalIncome = async () => {
      try {
        const response = await axiosInstance.get(`/admin/${user._id}/gettotalincome`);
        setTotalIncome(response.data);
      } catch (error) {
        console.error('Error fetching order count:', error);
        // Handle error gracefully
      }
    };

    const fetchUserCount = async () => {
      try {
        const response = await axiosInstance.get(`/admin/${user._id}/getAllUsers`);
        const userDataList = response.data; 
        setUserCount(userDataList.length);
      } catch (error) {
        console.error('Error fetching order count:', error);
        // Handle error gracefully
      }
    };

    fetchCourseData();
    fetchOrderCount();
    fetchTotalIncome();
    fetchUserCount();
  }, []);
  
  return (
    <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px]">Dashboard</div>

          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px] flex justify-between">
            <div className='w-[30%] rounded-[10px] bg-white shadow-md py-[24px] flex-col flex items-center justify-center'>
              <div className='text-[24px] font-medium'>{totalOrderCount}</div>
              <div className='text-[16px]'>Total Order</div>
            </div>
            <div className='w-[30%] rounded-[10px] bg-white shadow-md py-[24px] flex-col flex items-center justify-center'>
              <div className='text-[24px] font-medium'>{totalIncome}</div>
              <div className='text-[16px]'>Total Income</div>
            </div>
            <div className='w-[30%] rounded-[10px] bg-white shadow-md py-[24px] flex-col flex items-center justify-center'>
              <div className='text-[24px] font-medium'>{userCount}</div>
              <div className='text-[16px]'>User Count</div>
            </div>
          </div>

          <div className="w-11/12 md:w-full mx-auto  flex flex-wrap justify-center md:justify-between">
            {courseSalesData.length > 0 && <CourseCountChartComponent courseData={courseSalesData} />}
          </div>
    </div>
  )
}

export default dashboard