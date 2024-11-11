//Components
import Sidebar from "../Components/Sidebar";
import OverviewDashboard from "../Components/OverviewDashboard";

export default function DesignerDashboard() {
  return (
    <div className="flex flex-row h-screen pl-4 pr-4 pt-4 pb-4 gap-5">
      <Sidebar />
      <OverviewDashboard />
    </div>
  );
}