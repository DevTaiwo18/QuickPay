import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { wallet } from "../../wallet";
import { assets } from "../../../../assets/assets";
import { Helmet } from "react-helmet";

const Transactions = () => {
  const [filter, setFilter] = useState("all");

  const filterTransactions = (transactions, filter) => {
    if (filter === "all") return transactions;
    return transactions.filter(transaction => transaction.status === filter);
  };

  const transactions = filterTransactions(wallet.transactions, filter);

  return (
    <div className="p-1 md:p-4 space-y-4">
      <Helmet>
        <title>QuickPay - Transactions</title>
      </Helmet>
      
      {/* header */}
      <div className="flex items-center justify-between">
        <p className="">Transactions</p>
      </div>

      <div className="flex gap-2 md:gap-4 mb-4 flex-wrap">
        <button
          onClick={() => setFilter("success")}
          className="bg-green-500 text-white py-1 px-2 md:py-2 md:px-4 rounded text-xs md:text-base"
        >
          Success
        </button>
        <button
          onClick={() => setFilter("pending")}
          className="bg-yellow-500 text-white py-1 px-2 md:py-2 md:px-4 rounded text-xs md:text-base"
        >
          Pending
        </button>
        <button
          onClick={() => setFilter("fail")}
          className="bg-red-500 text-white py-1 px-2 md:py-2 md:px-4 rounded text-xs md:text-base"
        >
          Fail
        </button>
        <button
          onClick={() => setFilter("all")}
          className="bg-gray-500 text-white py-1 px-2 md:py-2 md:px-4 rounded text-xs md:text-base"
        >
          All
        </button>
      </div>

      {/* body */}
      <div className="border border-gray-200 space-y-2 rounded p-2">
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => {
            const { amount, user, customerId, product, type, date, time, status } = transaction;
            return (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 hover:bg-gray-300 p-2 rounded shadow"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="rounded-full">
                    <img
                      src={assets.mtnLogo}
                      alt="provider's logo"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </div>

                  <div>
                    <h3
                      className={`text-${
                        status === "success"
                          ? "green"
                          : status === "pending"
                          ? "amber"
                          : "red"
                      }-500  text-sm md:text-lg`}
                    >
                      {customerId}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400">
                      {date} | {time}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs md:text-base">{product}</p>
                  <p className="text-xs md:text-base text-gray-500">
                    {type === "credit" ? "+" : "-"}
                    {amount}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center min-h-44 border border-gray-400 rounded">
            <p className="text-xl text-gray-500">No transactions...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
