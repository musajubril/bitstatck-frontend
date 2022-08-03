import { CashIcon, FolderIcon, FolderRemoveIcon } from "@heroicons/react/outline";
import Layout from "components/Layout2";
import Stats from "components/Stats";
import Table from "components/Table";
import React from "react";

export default function User() {
  const stats = [
    {title:"Amount Saved", val:"# 999999", icon: FolderIcon, img: require("../../images/undraw_treasure_of9i.png")},
    {title:"Withdrawals", val:"# 999999", icon: FolderRemoveIcon, img: require('../../images/undraw_Wallet_re_cx9u.png')},
    {title:"Fixed Savings", val:"# 999999", icon: CashIcon, img: require('../../images/undraw_Savings_re_eq4w.png')},
    {title:"Flexible Savings", val:"# 999999", icon: CashIcon, img: require('../../images/undraw_Vault_re_s4my.png')}
  ]
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4"></div>
      <Stats stats={stats} />
      <Table />
    </Layout>
  );
}
