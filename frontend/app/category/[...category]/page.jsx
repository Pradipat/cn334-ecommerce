"use client"
import Banner from "@/components/homeContent/banner";
import SubCatagoryBar from "@/components/category/subCatagoryBar";
import PopularCard from "@/components/category/popularCard";
import '../../../components/homeContent/homeContent.css';
import SmallCard from "@/components/category/smallCard";
import ClinentSmallCard from "@/components/category/ClinentSmallCard";
import { useEffect, useState } from 'react';
import axiosInstance from "@/axios.config";

export default function Page({params}) {
const [mainCategory, subCategory] = params.category;
const [mainCategoryUI, setMainCategoryUI] = useState("mainCategory");
const [courses, setCourses] = useState([]);

useEffect(() => {
  const transformMainCategory = () => {
      const decodedMainCategory = decodeURIComponent(mainCategory); 
      const formattedMainCategory = decodedMainCategory.replace(/\+/g, ' '); // Replace + with spaces
      setMainCategoryUI(formattedMainCategory);
  };

  if (mainCategory) { // Check if mainCategory exists
      transformMainCategory();
  }
}, [mainCategory]);

useEffect(() => {
  const fetchCourses = async () => {
    try {
      let response;
      if (subCategory === 'all') {
        response = await axiosInstance.get(`/courses/${mainCategory}`); // Get ALL categories 
      } else {
        response = await axiosInstance.get(`/courses/subcategory/${subCategory}`);
      }
      setCourses(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      // Handle error
    }
  };

  fetchCourses();
}, [subCategory],[mainCategory]);

  return (
    <div className="bg-white w-full">
      <div className="w-11/12 lg:w-[1120px] mx-auto mt-[60px]">

        <div className="text-black md:text-3xl md:font-medium mb-5">{mainCategoryUI}</div>

        <SubCatagoryBar
          mainCategory = {mainCategory}
        />

        <Banner />

        <div className="mb-4 text-[1.1rem] font-semibold md:text-[1.3rem] text-black mt-[60px]">Popular Class</div>
        <div className=" flex gap-8 md:justify-between overflow-auto md:overflow-visible">
            <PopularCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            />
            <PopularCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            /><PopularCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            />
        </div>

        <div className="flex justify-between items-center mt-[60px] mb-4">
          <div className="text-[1.1rem] font-semibold md:text-[1.3rem] text-black">All Classes</div>
          <div className="flex gap-3 text-sm">
            <div className="text-black font-medium">Sort by newest</div>
            <div className="text-[#A0A0A0]">Sort by popularity</div>
          </div>
        </div>

        <div className="flex flex-wrap w-full justify-start gap-[2%] md:gap-[1.33333333333%] mb-[80px]">
          {courses.map((course) => (
            <ClinentSmallCard 
              key={course._id} 
              title={course.title} 
              instructorRole={course.instructorRole} 
              instructorName={course.instructorName} 
              imageSource={course.thumbnailImageURL || '/Class1.png'}
              status="Now Available"
              id={course._id} 
            />
          ))}
          {/* <ClinentSmallCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            />
          <ClinentSmallCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            />
          <ClinentSmallCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            /> */}
        </div>
        
      </div>
    </div>
  )
}


