// myClass.jsx
"use client"
import MyClassCard from "./myClassCard"
import axiosInstance from "@/axios.config";
import { AuthContext } from "@/AuthContext";
import React, { useState, useEffect, useContext } from 'react';

function myClass() {
  const { user } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const fetchMyCourses = async () => {
      if (!user) return; // User must be logged in

      try {
        const response = await axiosInstance.get(`/myClasses/${user._id}`); 
        setMyCourses(response.data);
      } catch (error) {
        console.error('Error fetching user enrollments:', error);
        // Handle the error (e.g., display an error message)
      }
    };

    fetchMyCourses();
  }, [user]);


  return (
        <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px]">My Class</div>
          <div className="w-11/12 md:w-full mx-auto  flex flex-wrap justify-center md:justify-between">
            {myCourses.map((course) => (
              <MyClassCard 
                key={course._id}
                className={course.title} 
                teacherName={course.instructorName} 
                teacherRole={course.instructorRole} 
                img={course.thumbnailImageURL || '/Class1.png'} 
              />
            ))}
        
            {/* <MyClassCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
            />
            <MyClassCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
            /> */}
          </div>
        </div>
  )
}

export default myClass