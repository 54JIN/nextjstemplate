"use client"

//Components
import SmallStatsDisplayCard from "./SmallStatsDisplayCard";
import GraphicalNetIncomeStatusDisplayCard from "./GraphicalNetIncomeStatusDisplayCard";
import GraphicalRevenueStatusDisplayCard from "./GraphicalRevenueStatusDisplayCard";
import BadgeStatusDisplayCard from "./BadgeStatusDisplayCard";
import WorkflowDisplayCard from "./WorkflowDisplayCard";

//Temp Data
import DashboardFetch from "../Assets/TempData/DashboardFetch";

export default function OverviewDashboard() {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-5">
      <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[60%] gap-5">
        <div className="flex flex-col gap-5 lg:flex-row w-full xl:justify-between">
          <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] ">
            <SmallStatsDisplayCard
              title="Total Earnings"
              value={`$${DashboardFetch.totalEarnings}`}
            />
          </div>
          <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] ">
            <SmallStatsDisplayCard
              title="Completed Tasks"
              value={`${DashboardFetch.completedTasks}`}
            />
          </div>
          <div className="flex flex-col gap-5 w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] ">
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-3 w-full">
              <p>Reviews</p>
              <h3 className="font-bold text-xl">{DashboardFetch.review} / 5</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
          <div className="w-full sm:w-full md:w-full lg:w-[30vw] xl:w-[28vw] 2xl:w-[20vw]">
            <WorkflowDisplayCard data={DashboardFetch.workflowItems} />
          </div>
          <div className="flex flex-col gap-5 sm:w-full md:w-full lg:w-[30vw] xl:w-[36vw] 2xl:w-[34vw]">
            <GraphicalNetIncomeStatusDisplayCard
              data={DashboardFetch.netIncomeStatus.netIncomeData}
              labels={DashboardFetch.netIncomeStatus.dataLabels}
            />
            <GraphicalRevenueStatusDisplayCard
              incomeData={DashboardFetch.revenueStatus.incomeData}
              expenseData={DashboardFetch.revenueStatus.expenseData}
              labels={DashboardFetch.revenueStatus.dataLabels}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <BadgeStatusDisplayCard
          title="Fast responder status"
          description="Earn a bunny badge and earn up to 3x more!"
          completed={`${DashboardFetch.badges.fastResponder.completed}`}
          needCompleted={`${DashboardFetch.badges.fastResponder.needCompleted}`}
        />
      </div>
    </div>
  );
}
