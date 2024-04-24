import MyClass from "@/components/account/myClass";
import OrderCart from "@/components/account/orderCart";
import OrderHistory from "@/components/account/orderHistory";
import ManageCourse from "@/components/account/manageCourse";
import Dashboard from "@/components/account/dashboard";

export default function Page({params}) {
      const menu = params.menu;
      return (
        <>
            {menu === "myClass" ? (
              <MyClass />
            ) : menu === "orderCart" ? (
              <OrderCart />
            ) : menu === "orderHistory" ? (
              <OrderHistory />
            ) : menu === "dashboard" ? (
              <Dashboard />
            ) : menu === "manageCourse" ? (
              <ManageCourse />
            ) : null}
        </>
      )
    }
    
    
    