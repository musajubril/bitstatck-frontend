import { CashIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';

export default function TransactionCards() {
  return (
    <div className="flex flex-wrap -m-2 pt-5" id="Guests">
      {["","","","","","",]?.map((course: any, i: number) => (
        <div
          className="w-full p-2 lg:w-1/3 md:w-1/2 sm:w-full searchBody"
          key={i}
        >
          <div 
          className="flex items-center h-full p-4 transform border border-gray-200 rounded-lg shadow hover:scale-105  cursor-pointer hover:bg-gray-100 bg-gray-50 duration-500"
          >
          < 
          >
            <div
              className={`avatar avatar-lg text-white flex-shrink-0 rounded-full mr-4 bg-${i%2!==0 ? "red" : "green"}-500 p-3`}
            >
                <CashIcon className='h-8' />
            </div>
            <div className="flex-grow">
              <h2 className="font-medium text-gray-900 title-font">{i%2!==0 ? "WIthdrawal" : "Fixed Savings"}</h2>
              <p className="font-medium text-gray-900 text-sm">#999999</p>
              <p className="font-medium text-gray-900 text-sm">{moment(Date.now()).format("LL")}</p>
            </div>
          </>
              </div>
        </div>
      ))}
    </div>
  )
}
