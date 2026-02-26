import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];
function SalesChart() {
  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white">
            sales by Category
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Product Distribution
          </p>
        </div>
        <div className="h-50">
          <PieChart
            style={{
              width: "100%",
              height: "10vh",
            }}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={3}
              dataKey="value"
              isAnimationActive={true}
            />
            <Tooltip />
          </PieChart>
          <div className="space-y-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {item.name}
                  </p>
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesChart;
