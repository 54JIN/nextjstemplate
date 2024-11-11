export default function DropDown() {
  return (
    <div className="dropdown dropdown-hover relative">
      <button tabIndex={0} className="btn btn-xs">
        Month
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[9999]"
      >
        <li>
          <p>Day</p>
        </li>
        <li>
          <p>Month</p>
        </li>
        <li>
          <p>Year</p>
        </li>
      </ul>
    </div>
  );
}
