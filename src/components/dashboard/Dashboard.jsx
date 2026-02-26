import React from "react";
import StatsGrid from "./StatsGrid";
import ChartSection from "./ChartSection";
import TableSection from "../Tables/TableSection";
import ActivityFeed from "./ActivityFeed";

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* stats grid */}
      <StatsGrid />
      <ChartSection />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
