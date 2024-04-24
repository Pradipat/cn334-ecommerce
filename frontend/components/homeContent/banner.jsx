export default function banner() {
  return (
    <div className='flex flex-col w-11/12 mx-auto md:w-11/12 lg:w-[1120px] rounded-[16px] h-[115px] md:h-[140px] overflow-hidden relative mt-[3.8rem]'>
        <img src="/banner1.png" alt="banner" className="w-full h-full object-cover absolute right-0 top-0"/>
        <div className="flex flex-col w-full h-full z-10 justify-center pl-8">
            <div className=" text-black font-semibold text-xl">All you need</div>
            <div className=" text-black font-semibold text-xl">: Character Illustration</div>
            <div className=" text-[#595959] font-light mt-4">Illustrator, Void</div>
        </div>
    </div>
  );
};
