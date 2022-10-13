import React from "react";
import {CalendarIcon, CashIcon, ChatIcon, HomeIcon, SearchIcon, ShoppingBagIcon, TrendingUpIcon, UserCircleIcon, UserIcon, UsersIcon, MenuIcon, XIcon, BellIcon, CogIcon} from "@heroicons/react/outline"
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router"
export default function Layout({children}) {
  const navigation = [
    {
      name: "Dashboard",
      icon: HomeIcon,
      url: "/dashboard",
    },
    {
      name: "Students",
      icon: UsersIcon,
      url: "/students",
    },
    {
      name: "Teachers",
      icon: UserCircleIcon,
      url: "/teachers",
    },
    {
      name: "Events",
      icon: CalendarIcon,
      url: "/events",
    },
    {
      name: "Finance",
      icon: CashIcon,
      url: "/finance",
    },
    {
      name: "Food",
      icon: ShoppingBagIcon,
      url: "/food",
    },
    {
      name: "User",
      icon: UserIcon,
      url: "/user",
    },
    {
      name: "SMS",
      icon: ChatIcon,
      url: "/sms",
    },
    {
      name: "Latest Activity",
      icon: TrendingUpIcon,
      url: "/activity",
    },
  ];
  const [displayNav, setDisplayNav] = React.useState(false)
  const [animate, setAnimate] = React.useState({
    transition: {duration: 0},
    initial: {x: -350},
    animate: {x:-350}
  })
  const handleOpenNav = () => {
    setDisplayNav(true)
    setAnimate({
      transition: {duration: 1},
      initial: {x: -350},
      animate: {x:0}
    })
  }
  const handleCloseNav = () => {
    setDisplayNav(false)
    setAnimate({
      transition: {duration: 1},
    initial: {x: 0},
    animate: {x:-350}
    })
  }
  const history = useHistory()
  console.log(navigation.filter(nav=>nav.url===history.location.pathname))
  const page = navigation.filter(nav=>nav.url===history.location.pathname)[0]
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar Start */}
      <motion.div initial={animate.initial} animate={animate.animate} transition={animate.transition} className={`fixed h-screen w-80 bg-yellow-500 z-50 ${displayNav ? "block" : "block"} lg:block`}>
        <div className=" w-full mt-12 flex justify-center">
          <img
            src="https://res.cloudinary.com/jewbreel1/image/upload/v1627500985/sms/Logo/staff_logo_labbas.png"
            alt=""
          />
        </div>
        <div className="w-full mt-12 text-white">
          <div className="w-full flex flex-col pl-11">
            {
              navigation.map((nav, i)=> (
            <NavLink to={nav.url} activeClassName="bg-purple-50 text-yellow-500" className="my-1 py-4 pl-6 w-full flex hover:bg-purple-50 hover:text-yellow-500 rounded-tl-full rounded-bl-full cursor-pointer" key={i}>
              <nav.icon className="w-10 h-10" />
              <div className="h-10 flex items-center ml-6 text-lg font-medium">{nav.name}</div>
            </NavLink>
              ))
            }
          </div>
        </div>
      </motion.div>
      <div className={`fixed h-screen w-80 bg-yellow-500 z-50 ${displayNav ? "hidden" : "hidden"} lg:block`}>
        <div className=" w-full mt-12 flex justify-center">
          <img
            src="https://res.cloudinary.com/jewbreel1/image/upload/v1627500985/sms/Logo/staff_logo_labbas.png"
            alt=""
          />
        </div>
        <div className="w-full mt-12 text-white">
          <div className="w-full flex flex-col pl-11">
            {
              navigation.map((nav, i)=> (
            <NavLink to={nav.url} activeClassName="bg-purple-50 text-yellow-500" className="my-1 py-4 pl-6 w-full flex hover:bg-purple-50 hover:text-yellow-500 rounded-tl-full rounded-bl-full cursor-pointer" key={i}>
              <nav.icon className="w-10 h-10" />
              <div className="h-10 flex items-center ml-6 text-lg font-medium">{nav.name}</div>
            </NavLink>
              ))
            }
          </div>
        </div>
      </div>
      {/* Sidebar End */}
      {/* Main Start */}
      <div className="min-h-screen static lg:ml-80 flex-grow w-full lg:pl-12 pl-3">
        {/* Title Start */}
      <div className='lg:hidden justify-between mb-10 w-full flex flex-row-reverse pt-12'>
        <div className="text-blue-900 font-bold text-4xl" >
         {
           !displayNav ?
           <MenuIcon className=' h-14 w-14 transform duration-500 transition-all' onClick={handleOpenNav} />
           :
           <XIcon className=' h-14 w-14 transform duration-500 transition-all' onClick={handleCloseNav} />
          }
        </div>
        <div className="flex rounded-md shadow-sm">
        <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="text-yellow-500 w-8 h-8" aria-hidden="true" />
            </div>
            <input
              type="search"
              name="search_students "
              id="search_students"
              className="block w-full focus:ring-yellow-500 focus:border-yellow-500 rounded-full py-1 h-14 lg:w-80 pl-20 placeholder-gray-400 text-lg font-normal"
              placeholder="Search"
            />
          </div>
        </div>
    </div>
    {/* Title End */}
    <div className="flex w-full lg:px-12 lg:mt-12 pr-3 justify-between lg:mb-11 mb-5">
          <p className="text-blue-900 text-4xl font-bold">
        {history.location.pathname === "/" ? "Dashboard" : page.name}
          </p>
          <div className="md:flex hidden">
            <div className=" p-3 rounded-full bg-white mr-5">
            <BellIcon className=' w-8 h-8 text-gray-400' />
            </div>
            <div className=" p-3 rounded-full bg-white mr-6">
            <CogIcon className=' w-8 h-8 text-gray-400' />
            </div>
            <div className="mr-6 flex flex-col items-end justify-center">
              <p className='text-blue-900 text-sm font-semibold'>Nabila A.</p>
              <p className='text-gray-400 text-sm font-normal'>Admin</p>
            </div>
            <div className="w-14 h-14 bg-purple-300 rounded-full"></div>
          </div>
        </div>
        <div className="lg:px-12">
        {children}
        </div>
      </div>
      {/* Main End */}
    </div>
  );
}
