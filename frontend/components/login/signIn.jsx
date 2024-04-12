'use client'
import React,{ useState } from "react";
import Link from 'next/link';

function signIn() {
    const [email, setEmail] = useState("");
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const emailHandle = (e) => {
        setEmail(e.target.value);
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

  return (
    <div className="text-black flex flex-col justify-center w-max items-center">
        <div className="text-black text-[24px] font-semibold">Sign In</div>
        <div className="flex flex-col mt-[50px]">
            <form className="flex flex-col gap-3">
                <div className="relative flex-col border border-[#929292] flex rounded-[5px] h-[44px] w-[343px] overflow-hidden justify-center px-2 leading-[10px]">
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

                <div className="relative flex-col border border-[#929292] flex rounded-[5px] h-[44px] w-[343px] overflow-hidden justify-center px-2 leading-[10px]">
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

                <input className="w-[343px] mt-[50px] h-[48px] bg-[#6c6c6c] rounded-[5px] flex text-white justify-center items-center font-semibold text-[16px] " type="submit" value={`Sign In`}/>
            </form>
        </div>
        <div className="flex gap-2 text-[#595959] font-light text-[15px] mt-4 w-max">
                    <div>New to EduProtal?</div>
                    <Link href={`/login/signUp`}><div className="underline">Sign up now</div></Link>
        </div>
    </div>
  )
}

export default signIn