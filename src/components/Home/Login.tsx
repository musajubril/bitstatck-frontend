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

export default function Login({form, setForm}) {
  const [passwordType, setPasswordType] = React.useState("password");
  const [PasswordEye, setPasswordEye] = React.useState<any>(EyeIcon);

  return (
    <>
      <div className="fixed bg-opacity-60 bg-black min-h-screen w-screen top-0 flex justify-center items-center font-inter backdrop-blur-md">
        <div className="fixed bg-white shadow-lg rounded-md w-m_w h-m_h flex flex-col items-center justify-center">
          <div className="w-m_f">
            <div className="text-gray-700 font-bold text-2xl">
              Create Account
            </div>
            <div className=" font-medium text-xl text-gray-500">
              Kindly input your sign in details below
            </div>
          </div>
          <div className=" mt-12 flex flex-col mb-7">
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
                type="email"
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="hayor.jose@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-col mb-7">
            <label htmlFor="" className=" text-base font-medium text-gray-500">
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
                type="number"
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="+2347064748874"
              />
            </div>
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor="email"
              className=" text-base font-medium text-gray-500"
            >
              Password
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <input
                type={passwordType}
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="*************"
              />
            </div>
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor="email"
              className=" text-base font-medium text-gray-500"
            >
              Confirm Password
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <input
                type={passwordType}
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="*************"
              />
            </div>
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor="email"
              className=" text-base font-medium text-gray-500"
            >
              Referral code
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <input
                type="text"
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="brodah_ayo"
              />
            </div>
          </div>
          <div className="flex w-m_f">
          <div className="w-1/2 mr-1 h-9 rounded mt-1 bg-yellow-500 text-white flex items-center justify-center text-lg font-semibold cursor-pointer">
            Sign Up
          </div>
          <div className="w-1/2 ml-1 h-9 rounded mt-1 border-yellow-500 text-yellow-500 border-2 flex items-center justify-center text-lg font-semibold cursor-pointer">
            Cancel
          </div>
          </div>
          <div className=" mt-10 w-full text-center font-medium text-sm">
            Have an account?{" "}
            <span className="text-yellow-500 cursor-pointer">Sign In Here</span>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none h-full">
                <PasswordEye
                onClick={handleShowPassword}
                className="w-5 h-5 text-gray-600 cursor-pointer"
                aria-hidden="true"
                />
              </div> */
}
