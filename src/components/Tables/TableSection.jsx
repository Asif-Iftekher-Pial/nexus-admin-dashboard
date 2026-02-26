import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
const tableData = [
  {
    orderId: "#1234",
    product: "Apple Watch",
    amount: "$1,000.00",
    status: "Pending",
    date: "2024-06-01",
  },
  {
    orderId: "#1235",
    product: "Samsung Galaxy",
    amount: "$800.00",
    status: "Shipped",
    date: "2024-06-02",
  },
  {
    orderId: "#1236",
    product: "Google Pixel",
    amount: "$700.00",
    status: "Delivered",
    date: "2024-06-03",
  },
  {
    orderId: "#1237",
    product: "OnePlus Nord",
    amount: "$500.00",
    status: "Cancelled",
    date: "2024-06-04",
  },
  {
    orderId: "#1238",
    product: "Sony Xperia",
    amount: "$600.00",
    status: "Processing",
    date: "2024-06-05",
  },
];
const topProductsData = [
  {
    name: "Apple Watch",
    sales: 150,
    revenue: "$150,000",
    trend: "down",
    change: "-3%",
  },
  {
    name: "Samsung Galaxy",
    sales: 120,
    revenue: "$120,000",
    trend: "up",
    change: "+5%",
  },
  {
    name: "Google Pixel",
    sales: 100,
    revenue: "$100,000",
    trend: "up",
    change: "+10%",
  },
  {
    name: "OnePlus Nord",
    sales: 80,
    revenue: "$80,000",
    trend: "down",
    change: "-2%",
  },
  {
    name: "Sony Xperia",
    sales: 90,
    revenue: "$90,000",
    trend: "up",
    change: "+8%",
  },
];
const getStatusColorByStatus = (status) => {
  switch (status) {
    case "Pending":
      return "text-yellow-500 dark:text-yellow-400 dark:bg-yellow-400/10 bg-yellow-500/10";
    case "Shipped":
      return "text-blue-500 dark:text-blue-400 dark:bg-blue-400/10 bg-blue-500/10";
    case "Delivered":
      return "text-green-500 dark:text-green-400 dark:bg-green-400/10 bg-green-500/10";
    case "Cancelled":
      return "text-red-500 dark:text-red-400 dark:bg-red-400/10 bg-red-500/10";
    case "Processing":
      return "text-indigo-500 dark:text-indigo-400 dark:bg-indigo-400/10 bg-indigo-500/10";
    default:
      return "text-gray-500";
  }
};
function TableSection() {
  return (
    <>
      <div className="space-y-6">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden ">
          <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold text-slate-800 dark:text-white">
                  Recent Orders
                </h1>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                {" "}
                view all
              </button>
            </div>
          </div>
          {/* table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                    Order ID
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                    Product
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                    Amount
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                    Status
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-600 ">
                    Date
                  </th>
                  <th className="text-left p-4 text-sm font-semibold text-slate-600 "></th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="p-4">
                        <span className="text-sm font-medium text-blue">
                          {item.orderId}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {item.product}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {item.amount}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`text-sm  rounded-full px-3 py-1 dark:text-slate-300 ${getStatusColorByStatus(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {item.date}
                        </span>
                      </td>

                      <td className="p-4 text-right">
                        <MoreHorizontal className="w-4 h-4 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* top products */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
          <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold text-slate-800 dark:text-white">
                  Top Products
                </h1>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Top selling products
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                view all
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {topProductsData.map((item, index) => {
                return (
                  <>
                    <div className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {item.sales} Sales
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-slate-800 dark:text-white">
                          {item.revenue}
                        </p>
                        <div className="flex items-center space-x-1">
                          {item.trend === "up" ? (
                            <TrendingUp className="w-3 h-3 text-green-500" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-red-500" />
                          )}
                          {item.trend === "up" ? (
                            <span className="text-sm text-green-500">
                              {item.change}
                            </span>
                          ) : (
                            <span className="text-sm text-red-500">
                              {item.change}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableSection;
