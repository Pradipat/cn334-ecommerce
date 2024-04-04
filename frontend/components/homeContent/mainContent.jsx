import CardCard from "./classCard";

export default function MainContent() {

  return (
       <div className='flex flex-col w-full md:w-full lg:w-[1120px] mx-auto'>
            <div className='font-medium text-xl mt-12 mb-4'>Best of Month</div>
            <div className='flex justify-between'>
                <CardCard />
                <CardCard />
                <CardCard />
            </div>
       </div>
  );
};
