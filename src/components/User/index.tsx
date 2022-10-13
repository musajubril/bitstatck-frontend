import { CashIcon, FolderIcon, FolderRemoveIcon } from "@heroicons/react/outline";
import Layout from "components/Layout2";
import SectionHeader from "components/SectionHeader";
import Stats from "components/Stats";
import Table from "components/Table";
import TransactionCards from "components/TransactionCards";
import React from "react";
import Carousel from "react-material-ui-carousel";

export default function User() {
  const stats = [
    {title:"Amount Saved", val:"# 999999", icon: FolderIcon, img: require("../../images/undraw_treasure_of9i.png")},
    {title:"Withdrawals", val:"# 999999", icon: FolderRemoveIcon, img: require('../../images/undraw_Wallet_re_cx9u.png')},
    {title:"Fixed Savings", val:"# 999999", icon: CashIcon, img: require('../../images/undraw_Savings_re_eq4w.png')},
    {title:"Flexible Savings", val:"# 999999", icon: CashIcon, img: require('../../images/undraw_Vault_re_s4my.png')}
  ]
  return (
    <Layout>
      <Stats stats={stats} />
      <div className="grid grid-cols-1 gap-6 my-5 w-full lg:grid-cols-2 xl:grid-cols-3">
        <div className="mb-6 md:mb-0 rounded-lg shadow-lg xl:col-span-2">
      <Carousel
      animation="slide"
      interval={8000}
      // swipe={true}
      indicatorContainerProps={{
        className: "sr-only",
        style: {
          display: "none", // 5
        },
      }}
      >
      <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <SectionHeader>
          FLexible Savings Chart
        </SectionHeader>
      <div className=" w-full h-96 flex justify-center items-center p-4">
      </div>
      </div>
      <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <SectionHeader>
          FLexible Savings Chart
        </SectionHeader>
      <div className=" w-full h-96 flex justify-center items-center p-4">
      </div>
      </div>
      <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <SectionHeader>
          FLexible Savings Chart
        </SectionHeader>
      <div className=" w-full h-96 flex justify-center items-center p-4">
      </div>
      </div>
    </Carousel>
      </div>
      <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <SectionHeader>
          Total fixed savings to total expected from fixed savings
        </SectionHeader>
      <div className=" w-full h-96 flex justify-center items-center p-4">
      </div>
      </div>
      </div>
      <SectionHeader>
        Transaction History
      </SectionHeader>
      <TransactionCards />
      <div className="rounded-lg overflow-hidden shadow transform transition-all duration-500 hover:scale-105 hover:shadow-lg h-full mt-5 bg-center bg-cover bg-no-repeat" style={{backgroundImage: require('../../images/vecteezy_unique-3d-money-wallet-dollars-design-isolated-on_8544375.jpg')}}>
      <div className="p-6 h-full">
        <div className="sm:flex sm:items-center sm:justify-between h-full">
          <div className="sm:flex sm:space-x-5 h-full">
            <div className="flex-shrink-0">
              <img className="mx-auto h-32 w-32 object-contain object-center" src={require("../../images/vecteezy_unique-3d-money-wallet-dollars-design-isolated-on_8544375.jpg")} alt="" />
              {/* <img className="mx-auto h-20 w-20 object-cover object-center" src={"/img/logo.jpeg"} alt="" /> */}
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left flex-col items-center justify-center flex">
              {/* <p className="text-sm font-medium text-gray-600">Welcome back,</p> */}
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">Withdrawal</p>
              <p className="text-sm font-medium text-gray-600 capitalize">#999999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
