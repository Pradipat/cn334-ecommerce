import ProductImg from "@/components/products/productImg";
import BuyButtom from "@/components/products/buyButtom";
import ProductDetail from "@/components/products/productDetail";

export default function Page({params}) {
    const [productId, name] = params.name;
      return (
        <div className="w-full bg-black flex flex-col justify-center items-center">
          <div className="w-11/12 lg:w-[1120px] mx-auto">
            <ProductImg 
              teacherName="DOKSA"
              teacherRole="Concept Artist"
              className="The 50-Chapter Guide to Character Design for Beginners"
              mainCategory="Illustration"
              subCategory="Characters"
              classImg="/productBanner.png"
            />
          </div>

          <BuyButtom 
            price={190.99}
            classStatus="Now Available"
          />

          <ProductDetail 
            classStatus="Now Available"
            timeLimit="Unlimited Access"
            level="Beginner"
            videoTotal={25}
            videoTime={[29,40]}
            price={190.99}
          />

          <div className="w-11/12 md:w-9/12 lg:w-[990px] mx-auto my-[60px] ">
            <div className=" font-semibold text-3xl mb-3">Master the Art with Guweiz, the Illustrator with 1M+ Follower</div>
            <div className="text-[#A0A0A0] font-light text-xl">Master art fundamentals and advanced techniques with Guweiz, who has collaborated with industry giants like Bandai Namco, Mynet, Gamefreak, Square Enix, Pixiv, and more. Gain insights into professional techniques and tools to enhance your artistic journey.</div>
          </div>

        </div>
      )
    }    