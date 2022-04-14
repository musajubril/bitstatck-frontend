import React from 'react'
import SVG from "../../images/hero.svg"
export default function Hero() {
  return (
    <div className='flex justify-between items-center'>
        <div className="flex flex-col w-5/12 text-lightBlue-900">
            <div className="text-7xl text-lightBlue-900">
            Save, Lend and <br />
            Invest your Crypto Instantly
            </div>
            <div className="text-xl">
                Save and join the leading and biggest wallet. Save, Invest and Trade <br />
                in Bitcoin, Etherum and other trending assets
            </div>
            <div className="flex justify-between">
                <button className="px-8 py-2 text-yellow-500 hover:bg-yellow-500 text-white hover:text-white font-bold border border-yellow-500 rounded">
                    Explore
                </button>
                <button className="px-8 py-2 bg-yellow-500 hover:text-yellow-500 text-white hover:bg-white font-bold border border-yellow-500 rounded">
                    Start Trading
                      </button>
            </div>
        </div>
        <div className=" -mt-64 w-2/12">
            <img src={require('../../images/Burst-circle-1.png')} />
        </div>
        <div className="w-5/12">
            <img src={SVG} />
        </div>
    </div>
  )
}
