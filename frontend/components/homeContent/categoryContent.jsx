import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CategoryCard from "./categoryCard.jsx"

export default function categoryContent() {
  return (
    <div className="w-11/12 mx-auto lg:w-[1120px] mt-[60px] overflow-hidden">
        <div className="mb-4 text-xl font-medium">Illustration</div>
        <div className="flex flex-wrap justify-between w-full ">
            <CategoryCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            />
            <CategoryCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            /><CategoryCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            /><CategoryCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            /><CategoryCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            /><CategoryCard 
                title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                teacherRole="Fullstack Dev"
                teacherName="akkharawoot"
                imageSource="/Class1.png"
                status="Now Available"
                id="12123"
            />
        </div>
        
        
        <div className='flex gap-1 justify-end text-[#F9858D] text-base font-light items-center '><div>view more</div><FontAwesomeIcon icon={faArrowRight} /></div>
    </div>
    
  )
}