import { EyeIcon, EyeSlashIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
import { wallet } from "../../wallet";
import { Link } from "react-router-dom";

const Summary = () => {
  const [showBalance, setShowBalance] = useState(true);

  function formatMoney(amount) {
    try {
      // Convert the input to a number
      let amountNum = Number(amount);
      if (isNaN(amountNum)) {
        throw new Error("Invalid input");
      }
      // Format the number with commas
      let formattedAmount = amountNum.toLocaleString("en-US");
      return formattedAmount;
    } catch (error) {
      return error.message;
    }
  }
  const balance = formatMoney(wallet.customerBalance);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* SUMMARY LEFT */}
      <div className="text  rounded-lg bg-blue-500 text-white  p-4 flex items-center justify-between gap-8 shadow">
        <div>
          <div className="flex items-center gap-2 ">
            <span className="text-2xl">Balance</span>
            {
              showBalance ?
                <EyeIcon className="size-4 cursor-pointer" onClick={() => { setShowBalance(!showBalance) }} /> :
                <EyeSlashIcon className="size-4 cursor-pointer" onClick={() => { setShowBalance(!showBalance) }} />
            }
          </div>
          <h3 className="text-4xl">{showBalance ? `N${balance}` || 0 : '********'}</h3>
        </div>

        <div className="bg-white flex items-center text-green-800  px-2 py-1 rounded-xl ">
          <PlusIcon className="size-4" />
          <Link to={"/dashboard/wallet"}>
            <button >Add Fund</button>
          </Link>
        </div>
      </div>
      {/* END OF SUMMARY LEFT */}

      {/* SUMMARY RIGHT */}
      <div className="hidden md:block rounded-lg p-4  shadow">
        <h3 className="text-2xl">Transactions</h3>
        <div className="flex items-center justify-between mt-4">
          <h4 className="text-4xl">{wallet.transactions.length || 0} </h4>
          <span className="text-sm text-gray-400">Last 30 days</span>
        </div>
      </div>
      {/* END OF SUMMARY RIGHT */}
    </div>
  );
};

export default Summary;
