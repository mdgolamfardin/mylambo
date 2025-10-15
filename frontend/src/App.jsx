import "./App.css";

function App() {
  return (
    // The main container sets up the flex row. I changed 'h-screen' to 'min-h-screen' for better content flow.
    <div className="flex flex-row  p-6 bg-blue-300 min-h-screen">
      {/* Calendar and Input: 
        - Uses 'w-3/4' to take 75% of the container width.
      */}
      <div className="bg-green-400 w-4/5 p-[2px] flex flex-col">
        <div className="bg-purple-400 h-3/4">
          <h1 className="text-2xl font-bold text-green-800">Calendar </h1>
          <p className="mt-2 text-green-700">
            This area is reserved for your primary content and data entry.
          </p>
        </div>
        <div className=" bg-red-300 h-1/4">
          <h1 className="text-2xl font-bold text-green-800">Input </h1>
        </div>
      </div>

      {/* Rewards: 
        - Uses 'w-1/4' to take 25% of the container width.
      */}
      <div className="bg-amber-400 w-1/5 p-6">
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
