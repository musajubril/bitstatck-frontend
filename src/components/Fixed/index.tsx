import { CashIcon, FolderIcon, FolderRemoveIcon } from "@heroicons/react/outline";
import ChartTypeArea from "components/ChartTypeArea";
import ChartTypeBar from "components/ChartTypeBar";
import ChartTypeLine from "components/ChartTypeLine";
import ChartTypePie from "components/ChartTypePie";
import Layout from "components/Layout2";
import SectionHeader from "components/SectionHeader";
import Stats from "components/Stats";
import TransactionCards from "components/TransactionCards";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Savings from "./Savings";

export default function Fixed() {
  const stats = [
    {title:"Amount Saved", val:"# 999999", icon: FolderIcon, img: require("../../images/undraw_treasure_of9i.png")},
    {title:"Total Expected", val:"# 999999", icon: FolderRemoveIcon, img: require('../../images/undraw_Make_it_rain_re_w9pc.png')},
    {title:"Total Saving Duration", val:"2 Years", icon: CashIcon, img: require('../../images/undraw_Time_management_re_tk5w.png')},
    {title:"Number Of Savings", val:"4", icon: CashIcon, img: require('../../images/undraw_Online_payments_re_y8f2.png')}
  ]
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4"></div>
      <Stats stats={stats} />
      <div className="grid grid-cols-1 gap-6 my-5 w-full lg:grid-cols-3 xl:grid-cols-3">
        <div className="mb-6 md:mb-0 rounded-lg shadow-lg">
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
      <ChartTypeArea />
      </div>
      </div>
      <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <SectionHeader>
          FLexible Savings Chart
        </SectionHeader>
      <div className=" w-full h-96 flex justify-center items-center p-4">
      <ChartTypeBar />
      </div>
      </div>
      <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <SectionHeader>
          FLexible Savings Chart
        </SectionHeader>
      <div className=" w-full h-96 flex justify-center items-center p-4">
      <ChartTypeLine />
      </div>
      </div>
    </Carousel>
      </div>
      <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <SectionHeader>
          Total fixed savings to total expected from fixed savings
        </SectionHeader>
      <div className=" w-full h-96 flex justify-center items-center p-4">
    <ChartTypePie />
      </div>
      </div>
      <div className="w-full bg-white shadow-lg rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
        <SectionHeader>
          Total fixed savings to total expected from fixed savings
        </SectionHeader>
      <div className=" w-full h-96 flex justify-center items-center p-4">
    <ChartTypePie />
      </div>
      </div>
      </div>
      <Savings />
      <TransactionCards />
    </Layout>
  );
}
