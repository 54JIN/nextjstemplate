import DropDown from "./DropDown";

interface OverviewDisplayProps {
    title: string;
    value: string;
  }

export default function OverviewDisplay({ title, value }: OverviewDisplayProps ){
  return (
    <div
      className={`flex flex-col w-[20vw] sm:w-[20vw] md:w-[25vw] lg:w-[25vw] xl:w-[18vw] 2xl:w-[15vw] gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm`}
    >
      <div className="flex justify-between items-center">
        <p className="text-md">{title}</p>
        <DropDown />
      </div>
      <div className="flex items-center">
        <h3 className="text-2xl font-semibold">{value}</h3>
      </div>
    </div>
  );
}
