"use client"

//Components
import Sidebar from "../Components/Sidebar";
import OverviewDashboard from "../Components/OverviewDashboard";

export default function DesignerDashboard() {
  return (
    <div className="flex h-auto xl:h-screen flex-col md:flex-row p-5 gap-5">
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-[97vw] lg:w-auto lg:static lg:left-auto lg:transform-none lg:translate-x-0 z-10">
        <Sidebar />
      </div>
      <OverviewDashboard />
    </div>
  );
}
