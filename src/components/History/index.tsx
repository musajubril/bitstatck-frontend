import { CashIcon, FolderIcon, FolderRemoveIcon } from "@heroicons/react/outline";
import Layout from "components/Layout2";
import React from "react";

export default function History() {
  const stats = [
    {title:"Amount Saved", val:"999999", icon: FolderIcon, img: require("../../images/undraw_treasure_of9i.png")},
    {title:"Withdrawals", val:"999999", icon: FolderRemoveIcon, img: require('../../images/undraw_Wallet_re_cx9u.png')},
    {title:"Fixed Savings", val:"999999", icon: CashIcon, img: require('../../images/undraw_Savings_re_eq4w.png')},
    {title:"Flexible Savings", val:"999999", icon: CashIcon, img: require('../../images/undraw_Vault_re_s4my.png')}
  ]
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4"></div>
      <div className="flex flex-wrap ">
        {
          stats.map((stat, i)=>(
            <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4" key={i}>
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
          <div className="relative w-full pl-4 flex-initial">
                  <div className="p-2 flex items-center justify-center">
                    {/* <stat.icon /> */}
                  <img src={stat.img} alt="" className="object-center h-40" />
                  </div>
                </div>
            <div className="flex-auto p-4 justify-center">
              <div className="flex flex-wrap justify-center">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    {" "}
                    {stat.title}
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    # {stat.val}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    }
      </div>
    </Layout>
  );
}
