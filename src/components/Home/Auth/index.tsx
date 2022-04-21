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
import CreateAccount from "./CreateAccount";
import Login from "./Login";

export default function Auth({form, setForm, open, setOpen}) {
  const [passwordType, setPasswordType] = React.useState("password");
  const [PasswordEye, setPasswordEye] = React.useState<any>(EyeIcon);

  return (
    <>
      <div className={`${ open ? "fixed" : "hidden"} bg-opacity-60 bg-black min-h-screen w-screen top-0 flex justify-center items-center font-inter backdrop-blur-md`}>
        {
          form==="Create Account" && 
          <div className="fixed bg-white shadow-lg rounded-md w-m_w h-m_h flex flex-col items-center justify-center">
          <CreateAccount form={form} setForm={setForm} open={open} setOpen={setOpen} />
          </div>
}
 {         
        form==="Login" && 
          <div className="fixed bg-white shadow-lg rounded-md w-m_w h-m_h flex flex-col items-center justify-center">
        <Login form={form} setForm={setForm} open={open} setOpen={setOpen} />
          </div>
      }
      </div>
    </>
  );
}