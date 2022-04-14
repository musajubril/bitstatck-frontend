import React from 'react'
// import Logo from '../../images/bitstack-logo.png'

export default function Navbar() {
  return (
    <div className='flex justify-between'>
        <div className="flex flex-col justify-center items-center">
            <img src={require('../../images/bitstack-logo.png')} alt="" className='object-center h-20' />
        </div>
        <div className="flex justify-evenly items-center flex-grow font-bold text-gray-600">
            <div className="">
                <p>Market</p>
            </div>
            <div className="">
                <p>Portfolio</p>
            </div>
            <div className="">
                <p>Watchlist</p>
            </div>
            <div className="">
                <p>Assets</p>
            </div>
            <div className="">
                <p>History</p>
            </div>
        </div>
        <div className="flex justify-evenly items-center">
            <div className="">
            <div className="text-left text-white bg-yellow-500 py-2 w-24 pl-2 mr-1 rounded-tl-md rounded-bl-md">Login</div>
            </div>
            <div className="">
            <div className="text-left text-white bg-yellow-500 py-2 w-24 pl-2 rounded-tr-md rounded-br-md">Signup</div>
            </div>
        </div>
    </div>
  )
}
