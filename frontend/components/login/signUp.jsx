'use client'
import React,{ useState } from "react";
import Link from "next/link";
import axios from 'axios';
import axiosInstance from "@/axios.config";
import { useRouter } from 'next/navigation';

function signUp() {
    const router = useRouter();
    
    const fetchAllAccounts = async () => {
      try {
        const response = await axiosInstance.get('/accounts');
        return response.data.data; // Assuming the backend returns data in { count, data } format
      } catch (error) {
        console.error('Error fetching accounts:', error);
        return [];
      }
    };
    
    const [name, setName] = useState("");
    const [isFocusedName, setIsFocusedName] = useState(false);
    const nameHandle = (e) => {
        setName(e.target.value);
      };
    const handleFocusName = () => {
        setIsFocusedName(true);
      };
    
    const handleBlurName = () => {
        setIsFocusedName(false);
      };

    const [email, setEmail] = useState("");
    const [isEmailExist, setIsEmailExist] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const emailHandle = async (e) => {
        setEmail(e.target.value);
        try {
          const accounts = await fetchAllAccounts();
          const emailExists = accounts.some((account) => account.email === e.target.value);
          setIsEmailExist(emailExists);
        } catch (error) {
          console.error('Error fetching accounts:', error);
        }
      };
    const handleFocusEmail = () => {
        setIsFocusedEmail(true);
      };
    
    const handleBlurEmail = () => {
        setIsFocusedEmail(false);
      };

    const [password, setPasswrod] = useState("");
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const passwordHandle = (e) => {
        setPasswrod(e.target.value);
      };
    const handleFocusPassword = () => {
        setIsFocusedPassword(true);
      };
    
    const handleBlurPassword = () => {
        setIsFocusedPassword(false);
      };

    const [cpassword, setcPasswrod] = useState("");
    const [isFocusedcPassword, setIsFocusedcPassword] = useState(false);
    const cpasswordHandle = (e) => {
        setcPasswrod(e.target.value);
      };
    const handleFocuscPassword = () => {
        setIsFocusedcPassword(true);
      };
    
    const handleBlurcPassword = () => {
        setIsFocusedcPassword(false);
      };
    
    const handleSubmit = async (e) => {
     e.preventDefault();
      try {

        const accounts = await fetchAllAccounts();

        const emailExists = accounts.some((account) => account.email === email);

        if (emailExists) {
          console.error('Email already exists');
          return;
        }
        else if (password !== cpassword) {
          console.error('Password is not equal Confirm Password');
          return;
        } else if (password.length < 8 ) {
          console.error('Password is less than 8 characters');
          return;
        };

        const response = await axiosInstance.post('/accounts', { name, email, password });
        console.log('Account created:', response.data);
        router.push('/login/signIn');
      } catch (error) {
        console.error('Error creating account:', error.response.data);
      }
    };
  return (
    <div className="text-black flex flex-col justify-center w-max items-center">
        <div className="text-black text-[24px] font-semibold">Sign Up</div>
        <div className="flex flex-col mt-[50px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative flex-col border border-[#929292] flex rounded-[5px] h-[44px] w-[343px] overflow-hidden justify-center px-2 leading-[10px]">
                    <label
                        className={`${
                            isFocusedName || name ? "text-[13px] top-1.5" : "text-[16px] top-1/2 -translate-y-1/2"
                        } absolute left-2 text-gray-500 transition-all duration-200 pointer-events-none z-10`}
                    >
                        Full name
                    </label>
                    <input
                    className={`${isFocusedEmail || email ? "" : ""} absolute left-2 bottom-2 w-full outline-none text-[14px] `}
                    type="text"
                    name="name"
                    value={name}
                    onChange={nameHandle}
                    onFocus={handleFocusName}
                    onBlur={handleBlurName}
                    />
                </div>

                <div><div className="relative flex-col border border-[#929292] flex rounded-[5px] h-[44px] w-[343px] overflow-hidden justify-center px-2 leading-[10px]">
                    <label
                        className={`${
                            isFocusedEmail || email ? "text-[13px] top-1.5" : "text-[16px] top-1/2 -translate-y-1/2"
                        } absolute left-2 text-gray-500 transition-all duration-200 pointer-events-none z-10`}
                    >
                        Email
                    </label>
                    <input
                    className={`${isFocusedEmail || email ? "" : ""} absolute left-2 bottom-2 w-full outline-none text-[14px] `}
                    type="email"
                    name="email"
                    value={email}
                    onChange={emailHandle}
                    onFocus={handleFocusEmail}
                    onBlur={handleBlurEmail}
                    />
                </div>
                {isEmailExist && (
                <div className=" text-red-500 text-[14px] font-light">This email is used</div>)}</div>

                <div><div className="relative flex-col border border-[#929292] flex rounded-[5px] h-[44px] w-[343px] overflow-hidden justify-center px-2 leading-[10px]">
                <label
                    className={`${
                        isFocusedPassword || password ? "text-[13px] top-1.5" : "text-[16px] top-1/2 -translate-y-1/2"
                    } absolute left-2 text-gray-500 transition-all duration-200 pointer-events-none z-10`}
                    >
                    Password
                </label>
                    <input
                    className="absolute left-2 bottom-2 w-full outline-none text-[14px]"
                    type="password"
                    name="password"
                    value={password}
                    onChange={passwordHandle}
                    onFocus={handleFocusPassword}
                    onBlur={handleBlurPassword}
                    />
                </div>
                {password.length > 0 && password.length < 8 && (
                <div className=" text-red-500 text-[14px] font-light">Password must contain at least 8 characters</div>)}</div>

                <div><div className="relative flex-col border border-[#929292] flex rounded-[5px] h-[44px] w-[343px] overflow-hidden justify-center px-2 leading-[10px]">
                <label
                    className={`${
                        isFocusedcPassword || cpassword ? "text-[13px] top-1.5" : "text-[16px] top-1/2 -translate-y-1/2"
                    } absolute left-2 text-gray-500 transition-all duration-200 pointer-events-none z-10`}
                    >
                    Confirm Password
                </label>
                    <input
                    className="absolute left-2 bottom-2 w-full outline-none text-[14px]"
                    type="password"
                    name="cpassword"
                    value={cpassword}
                    onChange={cpasswordHandle}
                    onFocus={handleFocuscPassword}
                    onBlur={handleBlurcPassword}
                    />
                </div>
                {cpassword !== password && (
                <div className=" text-red-500 text-[14px] font-light">Confirm Password doesn't match with Password</div>)}</div>
                

                <input className="w-[343px] mt-[50px] h-[48px] bg-[#6c6c6c] rounded-[5px] flex text-white justify-center items-center font-semibold text-[16px]  " type="submit" value={`Sign Up`}/>
            </form>
        </div>
        <div className="flex gap-2 text-[#595959] font-light text-[15px] mt-4 w-max">
                    <div>Already a member?</div>
                    <Link href={`/login/signIn`}><div className="underline">Sign in now</div></Link>
        </div>
    </div>
  )
}

export default signUp