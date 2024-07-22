import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";
import { wallet } from "../../wallet";
import { assets } from "../../../../assets/assets";

const TransactionsPreview = () => {
  const transactions = wallet.transactions.slice(0, 4);

  return (
    <div className="p-1 md:p-4 space-y-4">
      {/* header */}
      <div className="flex items-center justify-between">
        <p className="text-sm md:text-lg">Recent Transactions</p>
        <Link to={"/dashboard/transaction"} className="flex items-center text-sm md:text-lg justify-between gap-2 text-blue-400">
          View all <ChevronRightIcon className="w-4 h-4" />
        </Link>
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
                      className={`text-${status === "success"
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
          <div className="flex flex-col items-center gap-0 min-h-44 border border-gray-400 rounded">
            <img src={assets.notransaction} alt="" className="h-50 mt-10 w-64 text-gray-500" />
            <p className="text-sm md:text-xl text-gray-500 mb-10">No transactions...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsPreview;
