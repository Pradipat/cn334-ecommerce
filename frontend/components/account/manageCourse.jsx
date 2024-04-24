// manageCourse.jsx
"use client"
import ManageCourseCard from "./manageCourseCard"
import ManageCourseAddCard from "./manageCourseAddCard"
import React, { useEffect, useState } from "react"
import axiosInstance from "@/axios.config";

function manageCourse() {
  // API
  const [courses, setCourses] = useState([]); // Store fetched courses

  useEffect(() => {
    const fetchCourses = async () => {
        try {
            const response = await axiosInstance.get('/courses/'); 
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
            // Handle error (display error message, etc.)
        }
    };

    fetchCourses(); 
  }, []);
  
 
  const handleDeleteCourse = async (courseId) => {
    try {
      await axiosInstance.delete(`/courses/${courseId}`);

      setCourses(courses.filter((course) => course._id !== courseId)); 

      alert("Course Deleted");
    } catch (error) {
      console.error('Error deleting course:', error);
      // Handle the error, display an error message, etc.
    }
  };

  // UI
  const [isAdd , setIsAdd] = useState(false);
  const addHandleT = () =>{
    setIsAdd(true);
  }
  const addHandleF = () =>{
    setIsAdd(false);
  }

  return (
    <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px] flex justify-between items-center">
            <div className="">Manage Course</div>
            <div onClick={addHandleT} className=" w-max px-5 py-1 bg-[rgb(237,32,64)] rounded-[4px] font-medium text-[14px] flex justify-center items-center text-white">Add Class</div>
          </div>
          <div className="w-11/12 md:w-full mx-auto flex flex-col justify-center md:justify-between">
            {courses.map((course) => (
            <ManageCourseCard
                key={course._id} // Use the unique ID from the database
                oldtitle={course.title}
                olddescriptionTopic={course.descriptionTopic}
                olddescriptionContent={course.descriptionContent}
                oldprice={course.price}
                oldinstructorName={course.instructorName}
                oldinstructorRole={course.instructorRole}
                oldmainCategory={course.mainCategory}
                oldsubCategory={course.subCategory}
                oldsoldCount={course.soldCount}
                oldavailableTime={course.availableTime}
                oldlevel={course.level}
                oldtotalVideos={course.totalVideos}
                oldtotalTime={course.totalTime}
                oldthumbnailImageURL={course.thumbnailImageURL}
                oldbackgroundImageURL={course.backgroundImageURL}
                id={course._id}
                handleDeleteCourse={() => handleDeleteCourse(course._id)}
            />
            ))}
            {/* <ManageCourseCard 
              oldtitle = "Stylized Character Illustration Using Deformation"
              oldinstructorName = "Seoji"
              oldinstructorRole = "Illustrator"
              oldthumbnailImageURL = "/Class1.png"
              oldprice = {190.99}
            />
            <ManageCourseCard 
              oldtitle = "Stylized Character Illustration Using Deformation"
              oldinstructorName = "Seoji"
              oldinstructorRole = "Illustrator"
              oldthumbnailImageURL = "/Class1.png"
              oldprice = {190.99}
            /><ManageCourseCard 
              oldtitle = "Stylized Character Illustration Using Deformation"
              oldinstructorName = "Seoji"
              oldinstructorRole = "Illustrator"
              oldthumbnailImageURL = "/Class1.png"
              oldprice = {190.99}
            /> */}
            {isAdd ?
            <><div onClick={addHandleF} className={`bg-[rgba(0,0,0,0.49)] w-screen min-h-[100vh] top-0 left-0 fixed z-[100] flex justify-center items-center`}></div>
            <div className="w-screen top-[5vh] left-0 fixed z-[100] flex justify-center"><ManageCourseAddCard addHandleF={addHandleF} /></div></>
            : " "}
          </div>
        </div>
  )
}

export default manageCourse