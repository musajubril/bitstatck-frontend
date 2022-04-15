import React from 'react'
import Bit from '../../images/Vector.svg'
export default function Featured() {
  return (
    <div className='lg:mt-40 flex flex-col justify-between h-28 mb-24'>
        <p className='font-semibold font-sspro text-2xl text-gray-600'>Featured Companies</p>
        <div className="lg:flex justify-between max-h-12 grid grid-cols-2 gap-5">
            {
            ["","","",""].map((com, i)=>(
            <div className="flex lg:justify-between  col-span-1" key={i}>
                <img src={Bit} alt="" className=' w-12 h-12 mr-4' />
                <p className="font-sspro font-semibold text-2xl h-12 flex items-center text-gray-500"> Bitcoin</p>
            </div>
            ))
            }
        </div>
    </div>
  )
}
