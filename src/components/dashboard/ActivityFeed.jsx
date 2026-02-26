import { Bell, Clock } from "lucide-react";
import React from "react";
const activityFeeds = [
  {
    id: 1,
    type: "update",
    title: "Server Maintenance",
    description: "Scheduled maintenance on server XYZ completed.",
    time: "2h ago",
    icon: Bell,
    color: "bg-blue-100 text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    type: "update",
    title: "Server Maintenance",
    description: "Scheduled maintenance on server XYZ completed.",
    time: "2h ago",
    icon: Bell,
    color: "bg-blue-100 text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 3,
    type: "update",
    title: "Server Maintenance",
    description: "Scheduled maintenance on server XYZ completed.",
    time: "2h ago",
    icon: Bell,
    color: "bg-blue-100 text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 4,
    type: "update",
    title: "Server Maintenance",
    description: "Scheduled maintenance on server XYZ completed.",
    time: "2h ago",
    icon: Bell,
    color: "bg-blue-100 text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 5,
    type: "update",
    title: "Server Maintenance",
    description: "Scheduled maintenance on server XYZ completed.",
    time: "2h ago",
    icon: Bell,
    color: "bg-blue-100 text-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 6,
    type: "update",
    title: "Server Maintenance",
    description: "Scheduled maintenance on server XYZ completed.",
    time: "2h ago",
    icon: Bell,
    color: "bg-blue-100 text-blue-600",
    bgColor: "bg-blue-500/10",
  },
];
function ActivityFeed() {
  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 ">
        <div className="flex items-center justify-between p-6 border-b border-slate-200/50  dark:border-slate-700/50">
          <div>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
              Activity Feed
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Recent System Activities
            </p>
          </div>
          <button className="text-blue border border-slate-200/50 dark:border-slate-700/50 p-1.5 rounded-lg cursor-pointer hover:text-blue-700 hover:border-blue-700/50 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="p-6 overflow-y-auto" style={{ maxHeight: "318px" }}>
          <div className="space-y-4">
            {activityFeeds.map((item, index) => {
              return (
                <>
                  <div className="flex items-start space-x-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 p-3 transition-colors">
                    <div className={`p-2 rounded-lg ${item.bgColor}`}>
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.description}
                      </p>
                      <div className="flex items-center-safe space-x-1 mt-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="text-xs text-slate-400">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityFeed;
