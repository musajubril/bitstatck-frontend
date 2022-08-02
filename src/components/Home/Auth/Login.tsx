import React from "react";
import {
  ChevronDownIcon,
  SearchIcon,
  SortAscendingIcon,
  MailIcon,
  PhoneIcon,
  EyeOffIcon,
  EyeIcon,
  XIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";

export default function Login({form, setForm, open, setOpen, handleChange, handleSubmit, setLoginType, loginType}) {
  const [passwordType, setPasswordType] = React.useState("password");
  const [PasswordEye, setPasswordEye] = React.useState<any>(EyeIcon);
  // const [loginType, setLoginType] = React.useState("email")

  return (
    <form onSubmit={handleSubmit}>
          <div className="w-full md:w-m_f">
            <div className="text-gray-700 font-bold text-2xl">
              Sign In
            </div>
            <div className=" font-medium text-xl text-gray-500">
              Kindly input your sign in details below
            </div>
          </div>
          {
            loginType==="email" ?
            <>
            <div className="mt-12 flex flex-row-reverse text-yellow-500 w-full md:w-m_f text-xs font-medium cursor-pointer" onClick={()=>setLoginType("phone_number")}>
              Use Phone Number Instead
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor="email"
              className=" text-base font-medium text-gray-500"
              >
              Email
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none h-full">
                <MailIcon
                  className="w-5 h-5 text-gray-600"
                  aria-hidden="true"
                  />
              </div>
              <input
              onChange={handleChange}
                type="email"
                name="email"
                id="email"
                className="w-full md:w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="hayor.jose@gmail.com"
                />
            </div>
          </div>
                </>
          :
          <>
          <div className="mt-12 flex flex-row-reverse text-yellow-500 w-full md:w-m_f text-xs font-medium cursor-pointer" onClick={()=>setLoginType("email")}>
              Use Email Instead
          </div>
          <div className="flex flex-col mb-7">
            <label htmlFor="phone_number" className=" text-base font-medium text-gray-500">
              Phone Number
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none h-full">
                <PhoneIcon
                  className="w-5 h-5 text-gray-600"
                  aria-hidden="true"
                />
              </div>
              <input
              onChange={handleChange}
              name="phone_number"
              id="phone_number"
                type="number"
                className="w-full md:w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="+2347064748874"
              />
            </div>
          </div>
          </>
          }
          <div className="flex flex-col mb-7">
            <label
              htmlFor="password"
              className=" text-base font-medium text-gray-500"
            >
              Password
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <input
              name="password"
              id="password"
              onChange={handleChange}
                type={passwordType}
                className="w-full md:w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="*************"
              />
            </div>
          </div>
          <div className="flex w-full md:w-m_f">
          <input className="w-1/2 mr-1 h-9 rounded mt-1 bg-yellow-500 text-white flex items-center justify-center text-lg font-semibold cursor-pointer transform transition-all duration-500 hover:text-yellow-500 hover:bg-white border-yellow-500 border-2 hover:scale-105" value="Sign In" type="submit" />
            {/* Sign In
          </input> */}
          <div className="w-1/2 ml-1 h-9 rounded mt-1 border-yellow-500 text-yellow-500 border-2 flex items-center justify-center text-lg font-semibold cursor-pointer transform transition-all duration-500 hover:bg-yellow-500 hover:text-white hover:scale-105"
          onClick={()=>{
            setForm(null)
            setOpen(false)
          }}
          >
            Cancel
          </div>
          </div>
          <div className=" mt-10 w-full text-center font-medium text-sm">
            Don't have an account?{" "}
            <span className="text-yellow-500 cursor-pointer" onClick={()=>{
              setForm("Create Account")
            }}>Create Account Here</span>
          </div>
    </form>
  );
}