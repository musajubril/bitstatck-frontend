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

export default function CreateAccount({form, setForm, open, setOpen, handleChange, handleConfirmPassword, confirmPasswordError, handleSubmit}) {
  const [passwordType, setPasswordType] = React.useState("password");
  const [PasswordEye, setPasswordEye] = React.useState<any>(EyeIcon);

  return (
    <form onSubmit={handleSubmit}>
          <div className="w-m_f">
            <div className="text-gray-700 font-bold text-2xl">
              Create Account
            </div>
            <div className=" font-medium text-xl text-gray-500">
              Kindly input your account details below
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
              required
              onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="hayor.jose@gmail.com"
              />
            </div>
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
              required
              name="phone_number"
              id="phone_number"
              onChange={handleChange}
                type="number"
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="2347064748874"
              />
            </div>
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor="password"
              className=" text-base font-medium text-gray-500"
            >
              Password
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <input
              required
              name="password"
              id="password"
              onChange={handleChange}
                type="password"
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="*************"
              />
            </div>
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor="confirm_password"
              className=" text-base font-medium text-gray-500"
            >
              Confirm Password
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <input
              required
              onChange={handleConfirmPassword}
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="*************"
              />
              <div className={`text-red-700 text-sm mt-1 font-bold w-m_f bg-red-100 p-2 rounded ${confirmPasswordError ? "block" : "hidden"}`}>Passwords do not match</div>
            </div>
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor="referral_code"
              className=" text-base font-medium text-gray-500"
            >
              Referral code
            </label>
            <div className="relative flex-grow focus-within:z-10">
              <input
              name="referral_code"
              id="referral_code"
              onChange={handleChange}
                type="text"
                className="w-m_f h-9 border border-gray-300 text-sm pl-3 font-normal rounded mt-1"
                placeholder="brodah_ayo"
              />
            </div>
          </div>
          <div className="flex w-m_f">
          <input className="w-1/2 mr-1 h-9 rounded mt-1 bg-yellow-500 text-white flex items-center justify-center text-lg font-semibold cursor-pointer transform transition-all duration-500 hover:text-yellow-500 hover:bg-white border-yellow-500 border-2 hover:scale-105" type="submit" value="Sign Up" />
            {/* Sign Up */}
          {/* </inp> */}
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
            Have an account?{" "}
            <span className="text-yellow-500 cursor-pointer" onClick={()=>{
            setForm("Login")
            // setOpen(true)
          }}>Sign In Here</span>
          </div>
    </form>
  );
}