import Image from "next/image";
import MainContent from "@/components/homeContent/mainContent.jsx";
import Banner from "@/components/homeContent/banner";
import CategoryContent from "@/components/homeContent/categoryContent";

export default function Home() {
  return (
    <main className="w-full pb-[100px]">
        <MainContent />
        <Banner />
        <CategoryContent
          category="Illustration"   
        />
        <CategoryContent 
          category="Illustration"     
        />
    </main>
  );
}
