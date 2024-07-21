import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Summary from "../Index/Summary";
import { PhoneIcon, PowerIcon, TvIcon, WifiIcon, IdentificationIcon } from "@heroicons/react/24/outline";

const ServicesIndex = () => {
  const services = [
    {
      id: 1,
      title: "Data",
      description: "Buy affordable data plans.",
      link: "/dashboard/buy-data",
      icon: <WifiIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />,
    },
    {
      id: 2,
      title: "Airtime",
      description: "Recharge your phone with airtime.",
      link: "/dashboard/buy-airtime",
      icon: <PhoneIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />,
    },
    {
      id: 3,
      title: "Electricity",
      description: "Pay your electricity bills.",
      link: "/dashboard/buy-electricity",
      icon: <PowerIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />,
    },
    {
      id: 4,
      title: "Cable Subscription",
      description: "Subscribe to cable TV services (DSTV, GOTV, Startime).",
      link: "/dashboard/buy-cables",
      icon: <TvIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />,
    },
    {
      id: 5,
      title: "Virtual Numbers",
      description: "Get virtual phone numbers for various uses.",
      link: "/dashboard/buy-virtual-numbers",
      icon: <IdentificationIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />,
    },
    // Add more services as needed
  ];

  return (
    <div>
      <Helmet>
        <title>QuickPay - Services</title>
      </Helmet>
      <Summary />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {services.map((service) => (
          <Link
            key={service.id}
            to={service.link}
            className="flex flex-col border p-4 rounded shadow hover:bg-gray-200"
          >
            <div className="flex items-center justify-center mb-2">
              {service.icon}
            </div>
            <h2 className="text-lg font-bold mb-1">{service.title}</h2>
            <p className="text-sm text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesIndex;
