//Components
import OverviewDisplay from "../Components/OverviewDisplay";
import LogDisplay from "./LogDisplay";
import RevenueDisplay from "./RevenueDisplay";
import SalesDisplay from "./SalesDisplay";

export default function OverviewDashboard() {
  return (
    <div className="flex flex-col gap-5 w-full">
      {/* <h1 className="text-3xl font-medium">Dashboard</h1> */}
      <div className="flex flex-col xl:flex-row gap-5 ">
        <div className="flex flex-col md:flex-row xl:flex-col xl:justify-between gap-5 xl:gap-0">
          <OverviewDisplay title="Total Earning" value="$242.65K" />
          <OverviewDisplay title="Average Earning" value="$17.347K" />
          <OverviewDisplay title="Conversion Rate" value="74.86%" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between xl:gap-5">
          <RevenueDisplay />
          <SalesDisplay />
        </div>
      </div>
      <LogDisplay />
    </div>
  );
}
