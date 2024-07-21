import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import VerticalNavbar from "./Components/VerticalNavbar";
import DashboardNav from "./Components/Nav";
import StickyMenu from "../../component/layout/StickyMobileMenu";
import "./dashboard.css";
import NotFoundPage from "../NotFoundPage";
import BuyData from "./Subpages/Services/BuyData";
import BuyAirtime from "./Subpages/Services/BuyAirtime";
import DashboardIndex from "./Subpages/Index/DashboardIndex";
import ServicesIndex from "./Subpages/Services/ServicesIndex";
import WalletIndex from "./Subpages/Wallet/WalletIndex";
import UserIndex from "./Subpages/User/UserIndex";
import BuyElectricity from "./Subpages/Services/BuyElectricity";
import BuyCables from "./Subpages/Services/BuyCables";
import BuyVirtualNumbers from "./Subpages/Services/BuyVirtualNumbers";
import Transactions from "./Subpages/Index/Transactions";


const RoutesLink = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="flex flex-col h-screen pb-10 md:pb-0 border-slate-100">
      <DashboardNav />
      <div className="flex flex-1 overflow-hidden">
        <VerticalNavbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
        <div
          className={`flex-grow overflow-auto ${
            isNavbarOpen ? "w-10/12" : "w-full"
          } p-4`}
        >
          <Routes>
            <Route path="/" element={<DashboardIndex />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/wallet" element={<WalletIndex />} />
            <Route path="/user" element={<UserIndex />} />
            <Route path="/transaction" element={<Transactions />} />

            {/* SERVICES ROUTES */}
            <Route path="/buy-data" element={<BuyData />} />
            <Route path="/buy-airtime" element={<BuyAirtime />} />
            <Route path="/buy-electricity" element={<BuyElectricity />} />
            <Route path="/buy-cables" element={<BuyCables />} />
            <Route path="/buy-virtual-numbers" element={<BuyVirtualNumbers />} />

            {/* UTILS */}

            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
      <StickyMenu />
    </div>
  );
};

export default RoutesLink;
