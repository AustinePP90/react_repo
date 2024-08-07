import { useState } from "react";

export const ToggleButton2 = (props) => {
  const [onAir, setOnAir] = useState(false);
  const [onAir2, setOnAir2] = useState(false);

  // const func = (event, mode) => {
  //   console.log(mode, "==>", event.target, event.target.textContent);
  //   if (mode == 1) {
  //     if (event.target.textContent === "103.5 방송중단") {
  //       setOnAir(true);
  //     } else {
  //       setOnAir(false);
  //     }
  //   } else if (mode == 2) {
  //     if (event.target.textContent === "107.7 방송중단") {
  //       setOnAir2(true);
  //     } else {
  //       setOnAir2(false);
  //     }
  //   }
  // };

  const func = (event, mode) => {
    if (mode === 1) {
      setOnAir(!onAir);
    } else if (mode === 2) {
      setOnAir2(!onAir2);
    }
  };

  // 이벤트핸들러에 매개변수 전달하기
  // onClick={(event) => 함수명(event, 전달할 매개변수 값)}
  // const 함수명 = (event, 전달받을 매개변수 값 이름) => {}
    
  return (
    <div>
      <button onClick={(event) => func(event, 1)}>
        {onAir ? "103.5 방송중" : "103.5 방송중단"}
      </button>
      <button onClick={(event) => func(event, 2)}>
        {onAir2 ? "107.7 방송중" : "107.7 방송중단"}
      </button>
    </div>
  );
};
