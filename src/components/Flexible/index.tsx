import {
  CashIcon,
  FolderIcon,
  FolderRemoveIcon,
} from "@heroicons/react/outline";
import Layout from "components/Layout2";
import Stats from "components/Stats";
import React from "react";
import SectionHeader from "components/SectionHeader";
import Carousel from "react-material-ui-carousel";
import TransactionCards from "components/TransactionCards";

export default function Flexible() {
  const stats = [
    {
      title: "Amount Saved",
      val: "# 999999",
      icon: FolderIcon,
      img: require("../../images/undraw_treasure_of9i.png"),
    },
    {
      title: "Withdrawals",
      val: "# 999999",
      icon: FolderRemoveIcon,
      img: require("../../images/undraw_Wallet_re_cx9u.png"),
    },
    {
      title: "Fixed Savings",
      val: "# 999999",
      icon: CashIcon,
      img: require("../../images/undraw_Savings_re_eq4w.png"),
    },
    {
      title: "Flexible Savings",
      val: "# 999999",
      icon: CashIcon,
      img: require("../../images/undraw_Vault_re_s4my.png"),
    },
  ];
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4"></div>
      <Stats stats={stats} />
      <div className="grid grid-cols-1 gap-6 my-5 w-full lg:grid-cols-3 xl:grid-cols-3">
        <div className="mb-6 md:mb-0 rounded-lg shadow-lg xl:col-span-3">
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
              <SectionHeader>FLexible Savings Chart</SectionHeader>
              <div className=" w-full h-96 flex justify-center items-center p-4">
              </div>
            </div>
            <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <SectionHeader>FLexible Savings Chart</SectionHeader>
              <div className=" w-full h-96 flex justify-center items-center p-4">
              </div>
            </div>
            <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <SectionHeader>FLexible Savings Chart</SectionHeader>
              <div className=" w-full h-96 flex justify-center items-center p-4">
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <TransactionCards />
    </Layout>
  );
}
