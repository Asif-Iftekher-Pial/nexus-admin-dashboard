import {
  BarChart3,
  Calendar,
  ChevronRight,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4K",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "message",
    icon: MessageSquare,
    label: "Messages",
    count: "12",
    badge: "New",
  },
  {
    id: "calender",
    icon: Calendar,
    label: "Calender",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];
function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {
  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));
  /**
   * Toggles the expanded state of a sidebar item.
   * @param {string} itemId - The ID of the item to toggle.
   */
  const toggleExpanded = (itemId) => {
    // Create a new set to store the expanded items
    const newExpanded = new Set(expandedItems);

    // Check if the item is already expanded
    if (newExpanded.has(itemId)) {
      // If it is, remove it from the set
      newExpanded.delete(itemId);
    } else {
      // If it is not, add it to the set
      newExpanded.add(itemId);
    }

    // Update the state with the new set
    setExpandedItems(newExpanded);
  };
  return (
    <div
      className={`${collapsed ? "w-20" : "w-70"}
    transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-5 h-5  text-white" />
          </div>
          {/* conditional rendering */}
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* navigation will display dynamic menu*/}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.submenu) {
                    toggleExpanded(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
                  ${
                    currentPage === item.id || item.active
                      ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  }
                  `}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  {/* conditional rendering */}

                  {!collapsed && (
                    <>
                      <span className="text-sm ml-2 font-medium text-slate-800 dark:text-white">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-medium leading-4 text-white bg-red-500 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span
                          className="px-2 py-1 text-xs font-medium leading-4 text-slate-600 bg-slate-200
                            dark:bg-slate-700 dark:text-slate-300 rounded-full"
                        >
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {/* submenu */}
                {!collapsed && item.submenu && (
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedItems.has(item.id) ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>
              {/* submenus  iteration*/}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu &&
                    item.submenu.map((submenu) => {
                      return (
                        <button
                          key={submenu.id}
                          className="w-full text-left text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm 
                          flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                        >
                          <span className="text-sm ml-2 font-medium text-slate-800 dark:text-white">
                            {submenu.label}
                          </span>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* user profile */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 rounded-xl bg-slate-50 dark:bg-slate-800">
            <img
              className="w-10 h-10 rounded-full ring-blue-500"
              src="https://picsum.photos/200/300"
              alt=""
              srcSet=""
            />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  John Doe
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate ">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
