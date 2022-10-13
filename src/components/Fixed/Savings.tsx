import React from 'react'
import { MailIcon, PhoneIcon, TrashIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/outline";

export default function Savings() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2">
                <div
                  className="flex justify-center px-1 pt-1 pb-1 mt-1 border-2 border-gray-300 border-dashed rounded-md md:px-6 md:pt-5 md:pb-6 md:h-full h-40 items-center transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl duration-500 md:mb-0 mb-6"
                >
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600">
                        <div className="relative font-medium bg-white rounded-md cursor-pointer text-rose-600 hover:text-rose-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rose-500 flex-col flex">
                          <PlusIcon className="h-16" />
                          <span>Add new Saving routine</span>
                          
                        </div>
                      </div>
                    </div>
                </div>
        {["","",""]?.map((room, i) => (
          <li
            key={i}
            className="col-span-1 flex flex-col bg-white rounded-lg shadow divide-y divide-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-lg transform"
          >
            <div className="flex-1 flex flex-col p-8">
              {/* <img
                className="w-auto h-auto mx-auto bg-yellow-600"
                src={room.image}
                alt=""
              /> */}
              <h3 className="mt-2 text-gray-900 text-sm flex justify-center w-full font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime illum omnis dolores, magni animi ducimus, suscipit fugit deleniti maiores accusantium minus nam eos corporis eligendi itaque pariatur! Pariatur, nemo?em
              </h3>
              <h3 className="mt-2 text-center text-gray-900 text-3xl font-extrabold">
                # 500
              </h3>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href="#"
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-yellow-400 font-medium border border-transparent rounded-bl-lg hover:text-yellow-500"
                  >
                    <ExternalLinkIcon
                      className="w-5 h-5 text-yellow-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">View</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
  )
}
