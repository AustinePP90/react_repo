import { useState } from "react";

const MAX_CAPACITY = 10;

export const Gate = () => {
  const [isFull, setIsFull] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    let _count = count + 1;
    setCount(_count); // button을 누르면 count에 1씩 더함
    setIsFull(_count >= MAX_CAPACITY); // _count가 MAX_CAPACITY와 같아지면 true로 변함
    setIsEmpty(_count <= 0); // _count가 0이 되기 전까지 true, 0이 되면 false로 변함
  };

  const decreaseCount = () => {
    let _count = count - 1;
    setCount(_count); // button을 누르면 count에 1씩 더함
    setIsFull(_count >= MAX_CAPACITY); // _count가 MAX_CAPACITY와 같아지면 true로 변함
    setIsEmpty(_count <= 0); // _count가 0이 되기 전까지 true, 0이 되면 false로 변함
  };

  return (
    <div>
      <p>총 {count}명 수용했습니다!</p>
      <button disabled={isFull} onClick={increaseCount}>
        입장
      </button>
      <button disabled={isEmpty} onClick={decreaseCount}>
        퇴장
      </button>
      <p style={{ color: "red" }}>
        {" "}
        {isFull
          ? "정원이 가득 찼습니다!!!"
          : isEmpty
          ? "입장객이 없습니다!!!"
          : null}{" "}
      </p>
    </div>
  );
};
