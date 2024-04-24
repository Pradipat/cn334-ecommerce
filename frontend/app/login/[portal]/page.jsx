'use client'

import React,{ useState } from "react";
import SignIn from "@/components/login/signIn";
import SignUp from "@/components/login/signUp";

function page({params}) {
    const portal = params.portal;

    const [loginPage , setLoginPage] = useState("signIn");
    const handleSignIn = () => {
        setLoginPage("signIn");
    }
    const handleSignUp = () => {
        setLoginPage("signUp");
    }
    
  return (
    <>
    { portal === "signIn" ? 
        <SignIn /> 
      :  portal === "signUp" ?
       <SignUp /> : ""}
    </>
  )
}

export default page