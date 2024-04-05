import Banner from "@/components/homeContent/banner";
import SubCatagoryBar from "@/components/category/subCatagoryBar";
import PopularCard from "@/components/category/popularCard";
import '../../../components/homeContent/homeContent.css';
import SmallCard from "@/components/category/smallCard";
import ClinentSmallCard from "@/components/category/ClinentSmallCard";

export default function Page({params}) {
const [mainCategory, subCategory] = params.category;
  return (
    <div className="bg-white w-full">
      <div className="w-11/12 lg:w-[1120px] mx-auto mt-[60px]">

        <div className="text-black md:text-3xl md:font-medium mb-5">Illustration</div>

        <SubCatagoryBar />

        <Banner />

        <div className="mb-4 text-[1.1rem] font-semibold md:text-[1.3rem] text-black mt-[60px]">Popular Class</div>
        <div className=" flex gap-8 md:justify-between overflow-auto md:overflow-visible">
            <PopularCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
            />
            <PopularCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
            />
            <PopularCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
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
          <ClinentSmallCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development "
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
                productId="123"
            />
          <ClinentSmallCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
                productId="123"
            />
            <ClinentSmallCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
                productId="123"
            />
            <ClinentSmallCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
            />
            <ClinentSmallCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
            />
            <ClinentSmallCard
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                subtitle="Fullstack Dev, akkharawoot"
                imageSource="/Class1.png"
                productId="123"
            />
        </div>
        
      </div>
    </div>
  )
}


