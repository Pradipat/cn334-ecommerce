"use client"
import ManageCourseCard from "./manageCourseCard"
import ManageCourseAddCard from "./manageCourseAddCard"
import React, { useState } from "react"
import axiosInstance from "@/axios.config";


function manageCourse() {
  const [isAdd , setIsAdd] = useState(false);
  const addHandleT = () =>{
    setIsAdd(true);
  }
  const addHandleF = () =>{
    setIsAdd(false);
  }

  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await axiosInstance.post('/images/', formData);

        if (response.status === 200) { // Check for successful upload
            console.log('Image uploaded:', response.data);
            // Do something with the response.data.imageURL, e.g., display the uploaded image 
        } else {
            console.error('Upload failed:', response.statusText);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="w-full pb-[90px]">
          <div className="w-11/12 md:w-full mx-auto font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px] flex justify-between items-center">
            <div className="">Manage Course</div>
            <div onClick={addHandleT} className=" w-max px-5 py-1 bg-[rgb(237,32,64)] rounded-[4px] font-medium text-[14px] flex justify-center items-center text-white">Add Class</div>
            <form onSubmit={handleSubmit}>
              <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
              <button type="submit">Upload</button>
            </form>
          </div>
          <div className="w-11/12 md:w-full mx-auto flex flex-col justify-center md:justify-between">
            <ManageCourseCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            <ManageCourseCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            <ManageCourseCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            <ManageCourseCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
              price = {190.99}
            />
            {isAdd ?
            <><div onClick={addHandleF} className={`bg-[rgba(0,0,0,0.49)] w-screen min-h-[100vh] top-0 left-0 fixed z-[100] flex justify-center items-center`}></div>
            <div className="w-screen top-[5vh] left-0 fixed z-[100] flex justify-center"><ManageCourseAddCard /></div></>
            : " "}
          </div>
        </div>
  )
}

export default manageCourse