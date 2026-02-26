import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function RevenueChart() {
  // #region Sample data
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              Revenue Chart
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Monthly revenue and Expenses
            </p>
          </div>
          <div className="flex items-end gap-5">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <span>Revenue</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-linear-to-r from-slate-500 to-slate-500 rounded-full"></div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <span>Expenses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-50">
          <BarChart
            responsive
            style={{
              width: "100%",
              height: "100%",
            }}
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#8884d8"
              width="auto"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#82ca9d"
              width="auto"
            />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="uv" fill="#45556c" />
          </BarChart>
        </div>
      </div>
    </>
  );
}

export default RevenueChart;
