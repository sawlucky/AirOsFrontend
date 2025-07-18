import React from "react";

const FrequencyTuner = () => {
  // Frequency markers
  const markers = [
    { value: 200, main: true },
    { value: 240, main: true },
    { value: 270, main: true },
    { value: 300, main: true },
  ];

  // Generate minor markers
  const minorMarkers = [];
  for (let i = 190; i <= 310; i += 10) {
    if (![200, 240, 270, 300].includes(i)) {
      minorMarkers.push({ value: i, main: false });
    }
  }

  // Combine all markers
  const allMarkers = [...markers, ...minorMarkers].sort(
    (a, b) => a.value - b.value
  );

  return (
    <div className="w-full mx-0 max-w-[700px] h-[90px] bg-white flex flex-col justify-between p-2 relative">
      {/* Frequency scale */}
      <div className="w-full h-[90px] flex items-end relative">
        {/* Horizontal lines */}
        <div className="absolute top-0 left-0 w-full h-[0px] border-t border-black"></div>
        <div className="absolute top-1/4 w-full h-[0px] border-t border-[#eab557]"></div>
        <div className="absolute top-2/4 w-full h-[0px] border-t border-[#eab557]"></div>
        <div className="absolute top-3/4 w-full h-[0px] border-t border-black"></div>
        <div className="absolute bottom-0 w-full h-[0px] border-t border-black"></div>

        {/* Frequency markers */}
        {allMarkers.map((marker) => {
          const position = ((marker.value - 190) / 120) * 100;
          return (
            <div
              key={marker.value}
              className="absolute bottom-0"
              style={{ left: `${position}%` }}
            >
              <div
                className={
                  marker.main ? "h-6 w-px bg-black" : "h-3 w-px bg-black"
                }
              ></div>
              {marker.main && (
                <div className="absolute bottom-8 text-xs transform -translate-x-1/2">
                  {marker.value}
                </div>
              )}
            </div>
          );
        })}

        {/* Tuner indicator - Positioned absolute with negative top to overflow */}
        <div
          className="absolute top-[-15px] bottom-[-15px] left-[68%] w-2 bg-gradient-to-r from-amber-300 to-amber-500 shadow-lg rounded-sm z-10"
          style={{
            boxShadow:
              "0 0 5px rgba(0,0,0,0.3), 2px 0 3px rgba(0,0,0,0.2), -2px 0 3px rgba(0,0,0,0.2)",
            height: "calc(100% + 30px)",
          }}
        ></div>

        {/* Base of tuner indicator */}
        <div className="absolute bottom-[-8px] left-[68%] w-6 h-3 bg-amber-600 rounded-full transform -translate-x-2 shadow-md z-9"></div>
      </div>
    </div>
  );
};

export default FrequencyTuner;
