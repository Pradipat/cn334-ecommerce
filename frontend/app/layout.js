import { Inter } from "next/font/google";
import { FaSearch } from 'react-icons/fa';
import "./globals.css";
import ClientHeader from "@/components/header/ClientHeader.jsx";
import Footer from "@/components/footer/footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduProtal.",
  description: "EduProtal. Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* แก้ header */}
        <div className="fixed top-0 left-0 w-full z-20"><ClientHeader /></div>

        <div className="flex mt-[100px] min-h-[calc(100vh-100px-293px)]">{children}</div>

        {/* แก้ footer */}
        <div className="w-full overflow-hidden"><Footer /></div>
      </body>
    </html>
  );
}
