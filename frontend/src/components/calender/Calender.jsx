import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Table from "./Table";
function Calender() {
  return (
    <div className="flex flex-col bg-gray-800 h-full justify-center p-1 ">
      <div className="flex flex-row justify-around px-24 text-5xl">
        <h1 className="text-white font">
          <FaCaretLeft />
        </h1>
        <h1 className="text-white">October 2025</h1>
        <h1 className="text-white font">
          <FaCaretRight />
        </h1>
      </div>
      <div className="grow bg-gray-800 p-2">
        <Table />
      </div>
    </div>
  );
}

export default Calender;
