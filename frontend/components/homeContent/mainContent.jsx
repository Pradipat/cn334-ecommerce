import CardCard from "./classCard";

export default function MainContent() {

  return (
       <div className='flex flex-col w-full md:w-full lg:w-[1120px] mx-auto'>
            <div className='font-medium text-xl mt-12 mb-4'>Best of Month</div>
            <div className='flex gap-8 md:justify-between overflow-auto md:overflow-visible'>
                <CardCard 
                    title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                    teacherRole="Fullstack Dev"
                    teacherName="akkharawoot"
                    imageSource="/Class1.png"
                    status="Now Available"
                    id="12123"
                />
                <CardCard 
                    title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                    teacherRole="Fullstack Dev"
                    teacherName="akkharawoot"
                    imageSource="/Class1.png"
                    status="Now Available"
                    id="12123"
                />
                <CardCard 
                    title="50 Chapter Guide to HTML , CSS , JS for Web Development"
                    teacherRole="Fullstack Dev"
                    teacherName="akkharawoot"
                    imageSource="/Class1.png"
                    status="Now Available"
                    id="12123"
                />
            </div>
       </div>
  );
};
