import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PhoneIcon,
  PowerIcon,
  TvIcon,
  WifiIcon,
  IdentificationIcon,
  HomeIcon,
  UserIcon,
  WalletIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const VerticalNavbar = ({ isOpen }) => {
  const location = useLocation();

  const services = [
    {
      title: "Dashboard",
      link: "/dashboard/",
      icon: <HomeIcon className="h-6 w-6" />,
    },
    {
      title: "Data",
      link: "/dashboard/buy-data",
      icon: <WifiIcon className="h-6 w-6" />,
    },
    {
      title: "Airtime",
      link: "/dashboard/buy-airtime",
      icon: <PhoneIcon className="h-6 w-6" />,
    },
    {
      title: "Electricity",
      link: "/dashboard/buy-electricity",
      icon: <PowerIcon className="h-6 w-6" />,
    },
    {
      title: "Cable Subscription",
      link: "/dashboard/buy-cables",
      icon: <TvIcon className="h-6 w-6" />,
    },
    {
      title: "Virtual Numbers",
      link: "/dashboard/buy-virtual-numbers",
      icon: <IdentificationIcon className="h-6 w-6" />,
    },
    {
      title: "Transactions",
      link: "/dashboard/transaction",
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
    {
      title: "Wallet",
      link: "/dashboard/wallet",
      icon: <WalletIcon className="h-6 w-6" />,
    },
    {
      title: "User",
      link: "/dashboard/user",
      icon: <UserIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-2/12" : "w-0"
      } bg-blue-800 text-white py-5 pl-2 shadow-lg transition-width duration-300 hidden md:block verticalNav`}
      style={{ backgroundColor: "#1A2035" }}
    >
      <nav>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index}>
              <Link
                to={service.link}
                className={`flex items-center gap-2 p-2 rounded ${
                  location.pathname === service.link
                    ? "bg-blue-600"
                    : "hover:bg-blue-700"
                }`}
              >
                {service.icon}
                <span className="text-sm">{service.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default VerticalNavbar;
