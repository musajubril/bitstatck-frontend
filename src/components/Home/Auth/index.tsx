import React from "react";
import {
  EyeOffIcon,
  EyeIcon,
} from "@heroicons/react/solid";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import { useMutation, useQuery } from 'react-query';
import { registration, postRequest, login, getRequest } from '../../../api/apiCall';
import { SIGN_IN, SIGN_UP } from "api/apiUrl";

export default function Auth({form, setForm, open, setOpen}) {
  // const {data} = useQuery(
  //   getRequest,
  //   "",

  // )
  const [passwordType, setPasswordType] = React.useState("password");
  const [PasswordEye, setPasswordEye] = React.useState<any>(EyeIcon);
  const [loginType, setLoginType] = React.useState("email")
  const [userRegistration, setUserRegistration] = React.useState({
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    referral_code: "",
  })
  const [userLogin, setUserLogin] = React.useState({
    email: "",
    phone_number: "",
    password: ""
  })
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false)
  const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegistration({
      ...userRegistration,
      [e.target.name]: e.target.value
    })
  }
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value===userRegistration.password && setConfirmPasswordError(false)
    e.target.value!==userRegistration.password && setConfirmPasswordError(true)
  }
  const {mutate: sign_up} = useMutation(postRequest, {
    onSuccess(data){
      if(data?.message.type==="error") {
        alert(data?.message.msg)
      }
      if(data?.message.type==="success") {
        alert(data?.message.msg)
        setForm("Login")
      }
    },
    onError(){
      alert("registration failed")
    }
  })
  const {mutate: sign_in} = useMutation(login, {
    onSuccess(data){
      if(data?.message.type==="error") {
        alert(data?.message.msg)
      }
      if(data?.message.type==="success") {
        alert(data?.message.msg)
        window.location.href = "/user"
      }
    },
    onError(){
      alert("login failed")
    }
  })
  const handleCreateAccount = (e: any) => {
    e.preventDefault()
    // console.log(userRegistration)
    sign_up({
      url: SIGN_UP,
      data: userRegistration
    })
  }
  const handleLogin = (e: any) => {
    e.preventDefault()
    // console.log(userLogin)
    sign_in({
      url: SIGN_IN(loginType),
      data: userLogin
    })
  }
  return (
    <>
      <div className={`${ open ? "fixed" : "hidden"} bg-opacity-60 bg-black min-h-screen w-screen top-0 flex justify-center items-center font-inter backdrop-blur-md`}>
        {
          form==="Create Account" && 
          <div className="fixed bg-white shadow-lg rounded-md w-m_w h-m_h flex flex-col items-center justify-center">
          <CreateAccount form={form} setForm={setForm} open={open} setOpen={setOpen} handleChange={handleRegistrationChange} handleConfirmPassword={handleConfirmPassword} confirmPasswordError={confirmPasswordError} handleSubmit={handleCreateAccount} />
          </div>
}
 {         
        form==="Login" && 
          <div className="fixed bg-white shadow-lg rounded-md w-m_w h-m_h flex flex-col items-center justify-center">
        <Login form={form} setForm={setForm} open={open} setOpen={setOpen} handleChange={handleLoginChange} handleSubmit={handleLogin} loginType={loginType} setLoginType={setLoginType} />
          </div>
      }
      </div>
    </>
  );
}