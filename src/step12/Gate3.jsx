import { useState, useEffect } from "react";
import { useCounter } from "./useCounter";

const MAX_CAPACITY = 10;
export const Gate3 = () => {
  const [count, increaseCount, decreaseCount] = useCounter(0);
  const [isFull, setIsFull] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    setIsEmpty(count <= 0);
  }, [count]);

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
