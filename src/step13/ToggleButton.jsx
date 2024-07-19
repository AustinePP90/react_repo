import { useState } from "react";

export const ToggleButton = () => {
  const [onAir, setOnAir] = useState(false);
  const [onAir2, setOnAir2] = useState(false);

  const func1 = () => {
    setOnAir(!onAir);
  };

  const func2 = () => {
    setOnAir2(!onAir2);
  };

  return (
    <div>
      <button onClick={func1}>
        {onAir ? "103.5 방송중" : "103.5 방송중단"}
      </button>
      <button onClick={func2}>
        {onAir2 ? "107.7 방송중" : "107.7 방송중단"}
      </button>
    </div>
  );
};
