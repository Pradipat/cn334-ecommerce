"use client"

import "../../../components/account/account.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

export default function RootLayout({ children , params }) {
    const [isAdmin, setIsAdmin] = useState(true);
    const [myClass, setMyClass] = useState(false);
    const [orderCart, setOrderCart] = useState(false);
    const [orderHistory, setOrderHistory] = useState(false);
    const [dashboard, setDashboard] = useState(false);
    const [manageCourse, setManageCourse] = useState(false);

      useEffect(() => {
        setMyClass(false);
        setOrderCart(false);
        setOrderHistory(false);
    
        if (params.menu === "myClass") {
            setMyClass(true);
        } else if (params.menu === "orderCart") {
            setOrderCart(true);
        } else if (params.menu === "orderHistory") {
            setOrderHistory(true);
        } else if (params.menu === "dashboard") {
            setDashboard(true);
        } else if (params.menu === "manageCourse") {
            setManageCourse(true);
        }
      }, [params.menu]);

    return (
          <main className="w-full mainbg">
            <div className="w-full lg:w-[1120px] mx-auto flex h-max ">
                <div className=" bg-[#121212] w-[31%] h-full]">

                    <div className=" font-medium text-2xl mb-[40px] mt-[60px]">
                        <div>Hello,</div>
                        <div className="flex items-center gap-2 mt-1">User_Name!<FontAwesomeIcon className="text-[#ED2040] font-thin text-base" icon={faAngleRight} /></div>
                    </div>
                    
                    <div className="flex flex-col gap-2.5">
                        <Link href="/account/myClass" className={`flex h-[49px] w-[312px] justify-between rounded-[8px] items-center px-6 ${
                                myClass
                                ? "bg-[#FFFFFF] text-[#ED2040]"
                                : "bg-[#333333] text-[#C5C5C5]"
                            } font-medium text-base`}
                        >
                            <div className="">My Class</div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        <Link href="/account/orderCart" className={`flex h-[49px] w-[312px] justify-between rounded-[8px] items-center px-6 ${
                                orderCart
                                ? "bg-[#FFFFFF] text-[#ED2040]"
                                : "bg-[#333333] text-[#C5C5C5]"
                            } font-medium text-base`}
                        >
                            <div className="">Order Cart</div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        <Link href="/account/orderHistory" className={`flex h-[49px] w-[312px] justify-between rounded-[8px] items-center px-6 ${
                                orderHistory
                                ? "bg-[#FFFFFF] text-[#ED2040]"
                                : "bg-[#333333] text-[#C5C5C5]"
                            } font-medium text-base`}
                        >
                            <div className="">Order History</div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        { isAdmin ? (
                        <>
                        <Link href="/account/dashboard" className={`flex h-[49px] w-[312px] justify-between rounded-[8px] items-center px-6 ${
                                dashboard
                                ? "bg-[#FFFFFF] text-[#ED2040]"
                                : "bg-[#333333] text-[#C5C5C5]"
                            } font-medium text-base`}
                        >
                            <div className="">Dashboard</div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        <Link href="/account/manageCourse" className={`flex h-[49px] w-[312px] justify-between rounded-[8px] items-center px-6 ${
                                manageCourse
                                ? "bg-[#FFFFFF] text-[#ED2040]"
                                : "bg-[#333333] text-[#C5C5C5]"
                            } font-medium text-base`}
                        >
                            <div className="">Manage Course</div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        </>
                        ) : null }
                        
                    </div>

                    <div className="text-[#C5C5C5] font-medium text-base mt-[20px]">Sign out</div>
                </div>


                <div className=" bg-[#F2F2F2] pl-10 w-[69%] h-[600px]">{children}</div>
            </div>
          </main>
    )
  }