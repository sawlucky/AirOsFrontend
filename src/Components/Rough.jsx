import React, { useEffect } from "react";

const Rough = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.radio.co/player/2ad051d.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function if needed
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="radio-player-container"></div>
    </div>
  );
};

export default Rough;
