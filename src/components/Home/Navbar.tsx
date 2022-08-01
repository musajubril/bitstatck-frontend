import React from 'react'
// import Login from "./Login"
// import Logo from '../../images/bitstack-logo.png'

export default function Navbar({form, setForm, open, setOpen}) {
    // const [open, setOpen] = React.useState(false)
    // const handleOpen = () => {
    //     setOpen(true)
    // }
    // const handleClose = () => {
    //     setOpen(false)
    // }
  return (
      <>
      {/* <Login /> */}
      <div className='w-full bg-white fixed top-0'>
    <div className='justify-between h-24 items-center lg:flex lg:container mx-auto w-full px-6'>
        <div className="flex flex-col justify-center items-center">
            <img src={require('../../images/bitstack-logo.png')} alt="" className='object-center h-20' />
        </div>
        <div className="flex justify-evenly items-center flex-grow font-bold text-gray-600">
            <div className="cursor-pointer">
                <p>Market</p>
            </div>
            <div className="cursor-pointer">
                <p>Portfolio</p>
            </div>
            <div className="cursor-pointer">
                <p>Watchlist</p>
            </div>
            <div className="cursor-pointer">
                <p>Assets</p>
            </div>
            <div className="cursor-pointer">
                <p>History</p>
            </div>
        </div>
        <div className="flex justify-evenly items-center">
            <div className="cursor-pointer">
            <div className="text-left text-white bg-yellow-500 py-2 w-24 mr-1 rounded-tl-md rounded-bl-md font-inter font-bold transform transition-all hover:scale-105 duration-700 pl-3"
            onClick={()=>{
                setForm("Login")
                setOpen(true)
            }}
            >Login</div>
            </div>
            <div className="cursor-pointer">
            <div className="text-left text-white bg-yellow-500 py-2 w-24 pl-3 rounded-tr-md rounded-br-md font-inter font-bold transform transition-all hover:scale-105 duration-700"
            
            onClick={()=>{
                setForm("Create Account")
                setOpen(true)
            }}
            >Signup</div>
            </div>
        </div>
    </div>
    <div className="lg:hidden fixed w-full px-6 bg-white flex justify-between h-24 items-center top-0">
    <div className="flex flex-col justify-center items-center">
            <img src={require('../../images/bitstack-logo.png')} alt="" className='object-center h-20' />
        </div>
    <div className="flex flex-col justify-center items-center">
            {/* <button className={`object-center border border-yellow-500 rounded px-6 py-2 ${open ? "hidden" : "block"}`} onClick={handleOpen}> open </button> */}
        </div>
    </div>
      </div>
      </>
  )
}
