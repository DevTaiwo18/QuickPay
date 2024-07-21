import {
  PhoneIcon,
  PowerIcon,
  TvIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const Shortcuts = () => {
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 md:items-center md:justify-evenly mt-2">
      {/* Data */}
      <Link
        to="/dashboard/buy-data"
        className="flex flex-col border p-1 md:p-2 text-sm rounded shadow items-center hover:bg-gray-200"
      >
        <div className="p-2">
          <WifiIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />
        </div>
        <span>Data</span>
      </Link>

      {/* Airtime */}
      <Link
        to="/dashboard/buy-airtime"
        className="flex flex-col border p-1 md:p-2 text-sm rounded shadow items-center hover:bg-gray-200"
      >
        <div className="p-2">
          <PhoneIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />
        </div>
        <span>Airtime</span>
      </Link>

      {/* Electricity */}
      <Link
        to="/dashboard/buy-electricity"
        className="flex flex-col border p-1 md:p-2 text-sm rounded shadow items-center hover:bg-gray-200"
      >
        <div className="p-2">
          <PowerIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />
        </div>
        <span>Electricity</span>
      </Link>

      {/* Cables */}
      <Link
        to="/dashboard/buy-cables"
        className="flex flex-col border p-1 md:p-2 text-sm rounded shadow items-center hover:bg-gray-200"
      >
        <div className="p-2">
          <TvIcon className="h-6 w-6 md:h-8 md:w-8 stroke-blue-500" />
        </div>
        <span>Cables</span>
      </Link>
    </div>
  );
};

export default Shortcuts;
