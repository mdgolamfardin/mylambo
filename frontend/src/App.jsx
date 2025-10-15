import "./App.css";
import Calender from "./components/calender/Calender";
import Input from "./components/Input";

function App() {
  return (
    // The main container sets up the flex row. I changed 'h-screen' to 'min-h-screen' for better content flow.
    <div className="flex flex-row  px-8 py-6 bg-gray-800 min-h-screen ">
      {/* Calendar and Input: 
        - Uses 'w-3/4' to take 75% of the container width.
      */}
      <div className="bg-green-400 w-4/5 flex flex-col  ">
        <div className="bg-purple-400 h-3/4 ">
          <Calender />
        </div>
        <div className=" bg-red-300 h-1/4">
          <Input />
        </div>
      </div>

      {/* Rewards: 
        - Uses 'w-1/4' to take 25% of the container width.
      */}
      <div className="bg-amber-400 w-1/5 ">
        <h1 className="text-2xl font-bold text-amber-800">
          Rewards (1/4 Width)
        </h1>
        <p className="mt-2 text-amber-700">
          Quick view of your achievements and bonuses.
        </p>
      </div>
    </div>
  );
}

export default App;
