import { CashIcon, FolderIcon, FolderRemoveIcon } from "@heroicons/react/outline";
import Layout from "components/Layout2";
import Stats from "components/Stats";
import React from "react";
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
      <Savings />
    </Layout>
  );
}
