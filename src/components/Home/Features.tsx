import React from 'react'
import SVG100 from '../../images/100.svg'
import SVG23 from '../../images/Frame 23.svg'
import SVG102 from '../../images/102.svg'
import SVGCheck from '../../images/bxs_user-check.svg'
import SVGCheck2 from '../../images/bxs_user-check2.svg'
import SVGMoney from '../../images/Frame 64.svg'
export default function Features() {
  return (
    <div className='h-auto pt-40 px-20 text-gray-700' style={{
        backgroundImage: `url(${require('../../images/Mesh-94.png')})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: "100vh"
    }}>
        <div className="flex w-full">
            <div className="flex flex-col mr-48">
                <div className=" mb-8">
                    <img src={require('../../images/bitstack-logo.png')} alt="" className='h-36 w-28' />
                </div>
                <div className=" font-semibold text-4xl font-sspro mb-10">
                    <p>How to trade on <br /> Bitstack</p>
                </div>
                <div className="">
                    <button className="bg-yellow-500 text-white border border-yellow-500 font-sspro font-semibold text-2xl p-3 rounded-md">Start Trading</button>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <div className="shadow-lg bg-white p-8 rounded-md flex justify-between">
                    <img src={SVGCheck} alt="" className="mr-9" />
                    <div className="flex flex-col">
                        <p className="font-bold font-sspro text-xl">Create an Account</p>
                        <p className="font-semibold font-sspro text-sm pr-8">You can sign up and use bitstack fast and easy in few minutes</p>
                    </div>
                </div>
                <div className="my-3">
                    <img src={SVG100} alt="" className=' h-14 object-center mx-auto' />
                </div>
                <div className="shadow-lg bg-white p-8 rounded-md flex justify-between">
                    <img src={SVGCheck2} alt="" className="mr-9" />
                    <div className="flex flex-col">
                        <p className="font-bold font-sspro text-xl">Verify Identity</p>
                        <p className="font-semibold font-sspro text-sm pr-8">Verify your identity with the easiest to use KYC for full capability</p>
                    </div>
                </div>
                <div className="my-3">
                    <img src={SVG100} alt="" className=' h-14 object-center mx-auto' />
                </div>
                <div className="shadow-lg bg-white p-8 rounded-md flex justify-between mb-44">
                    <img src={SVGMoney} alt="" className="mr-9" />
                    <div className="flex flex-col">
                        <p className="font-bold font-sspro text-xl">Fund wallet</p>
                        <p className="font-semibold font-sspro text-sm pr-8">Fund your wallet fast and easy to enable you start trading</p>
                    </div>
                </div>
            </div>
            <div className="flex h-full items-center justify-center mt-52 ml-3">
                <img src={SVG102} alt="" />
            </div>
            <div className=" mt-12 flex flex-col bg-white start_trading pt-20">
                <div className="">
                <img src={SVG23} alt="" className=' mx-auto' />
                </div>
                <div className="font-semibold font-sspro text-4xl mt-16 mb-4 text-center text-gray-800">
                    Start Trading
                </div>
                <div className="font-semibold font-sspro text-sm text-center px-20">
                    Start trading instantly by buying, selling, lending and investing in cryptocurrencies and Fiat.
                </div>
            </div>
        </div>
    </div>
  )
}
