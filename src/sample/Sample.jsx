import { useState, useEffect } from "react";

export const Sample = () => {
  const [count, setCount] = useState(0);
  const [titleCount, setTitleCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const changeCount = (id, event) => {
    setCount((current) => current + 1);
    console.log(id, event.target);
  };

  const changeTitle = (event) => {
    setTitleCount((current) => current + 1);
    console.log(event.type);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    document.title = `타이틀은 ${titleCount}번 `;
  }, [titleCount]);

  return (
    <div>
      <p>{count}번 버튼 클릭!</p>
      <button onClick={(event) => changeCount(count, event)}>버튼</button>
      <br />
      <p>{titleCount}타이틀 변경 버튼 클릭!</p>
      <button onClick={(event) => changeTitle(event)}>타이틀 변경 버튼</button>
      <br />
      <p>클릭 버튼을 눌러 주세요!</p>
      <button onClick={handleClick} disabled={isClicked}>
        {isClicked ? "확인됨!" : "확인하기"}
      </button>
    </div>
  );
};
