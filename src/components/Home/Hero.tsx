import React from 'react'
export default function Hero() {
  return (
    <div className='flex lg:flex-row flex-col justify-between items-center mt-32 lg:mt-56'>
        <div className="flex flex-col lg:w-5/12 text-lightBlue-900">
            <div className="text-7xl text-lightBlue-900 font-sspro font-bold">
            Save, Lend and <br className='lg:block hidden' />
            Invest your Crypto Instantly
            </div>
            <div className="text-xl font-inter font-medium mt-8">
                Save and join the leading and biggest wallet. Save, Invest and Trade <br />
                in Bitcoin, Etherum and other trending assets
            </div>
            <div className="flex lg:flex-row flex-col justify-between mt-16">
                <button className="px-8 py-2 text-yellow-500 hover:bg-yellow-500 bg-white hover:text-white border border-yellow-500 rounded lg:w-60 w-full h-16 font-inter font-medium text-2xl mb-2">
                    Explore
                </button>
                <button className="px-8 py-2 bg-yellow-500 hover:text-yellow-500 text-white hover:bg-white border border-yellow-500 rounded lg:w-60 w-full h-16 font-inter font-medium text-2xl">
                    Start Trading
                      </button>
            </div>
        </div>
        <div className=" -mt-64 lg:w-2/12 hidden lg:block">
            <img src={require('../../images/Burst-circle-1.png')} />
        </div>
        <div className="lg:w-5/12">
            <img src={require('../../images/Group 18.png')} className="h-96 lg:h-auto" />
        </div>
    </div>
  )
}
