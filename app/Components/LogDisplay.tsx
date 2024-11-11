import logData from "../Assets/TempData/logData";
import SearchBar from "./SearchBar";

export default function LogDisplay() {
  return (
    <div className="flex flex-col p-4 gap-3 bg-white border border-gray-200 rounded-lg shadow-sm overflow-y-hidden">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl">History Log</h3>
        <SearchBar />
      </div>
      <div className="flex flex-col gap-3 overflow-y-scroll">
        <div className="flex justify-between bg-gray-200 pt-2 pb-2 pl-4 pr-4 rounded-xl">
          <p className="text-md w-[40%]">ID</p>
          <p className="text-md w-[15%]">Style</p>
          <p className="text-md w-[15%]">Style ID</p>
          <p className="text-md w-[15%]">Status</p>
          <p className="text-md w-[15%]">Payment</p>
        </div>
        <div className="flex flex-col gap-3">
          {logData.map((log, idx) => {
            return (
              <div className="flex justify-between pl-4 pr-4" key={idx}>
                <p className="text-md w-[40%]">{log.id}</p>
                <p className="text-md w-[15%]">{log.style}</p>
                <p className="text-md w-[15%]">{log.styleId}</p>
                <p className="text-md w-[15%]">{log.status}</p>
                <p className="text-md w-[15%]">{log.payment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
