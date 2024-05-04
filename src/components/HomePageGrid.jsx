export const HomePageGrid = () => {
  return (
    <div className="m-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4 mt-4">
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor md:w-1/4 lg:w-1/4">1</div>
        <div className="bg-darkgray p-4 h-24 md:h-96 lg:h-96 rounded-lg border border-gridBorderColor md:w-1/3 lg:w-1/3">2</div>
        <div className="bg-darkgray p-4 h-48 md:h-96 lg:h-96 rounded-lg border border-gridBorderColor md:w-5/12 lg:w-5/12">3</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor">4</div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor">5</div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor">6</div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor">7</div>
      </div>
    </div>
  );
};
