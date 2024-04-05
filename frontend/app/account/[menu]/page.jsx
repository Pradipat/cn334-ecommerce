import MyClassCard from "@/components/account/myClassCard";

export default function Page({params}) {
      const menu = params.menu;
      return (
        <div className="w-full">
          <div className=" font-medium text-[20px] text-[#383838] mt-[90px] mb-[45px]">My Class</div>
          <div className="flex flex-wrap w-[100%] justify-between">
            <MyClassCard 
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
            />
            <MyClassCard 
              className = "Stylized Character Illustration Using Deformation"
              teacherName = "Seoji"
              teacherRole = "Illustrator"
              img = "/Class1.png"
            />
          </div>
        </div>
      )
    }
    
    
    