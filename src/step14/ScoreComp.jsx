import { useState } from "react";

function Grade(props) {
  if (props.score > 60) {
    return <p>합격 입니다.</p>;
  } else {
    return <p>불합격 입니다.</p>;
  }
}

export const ScoreComp = (props) => {
  const [score, setScore] = useState(100);

  function changeText(event) {
    console.log(event.target.value);
    let _score = Number(event.target.value);
    setScore(_score);
  }

  return (
    <div>
      <input type="text" onChange={(event) => changeText(event)} />
      <Grade score={score}></Grade>
    </div>
  );
};
