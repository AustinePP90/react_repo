import { useState } from "react";
import { useEffect } from "react";

const MAX_CAPACITY = 10;

export const Gate2 = () => {
  const [isFull, setIsFull] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    let _count = count + 1;
    setCount(_count); // button을 누르면 count에 1씩 더함
  };

  const decreaseCount = () => {
    let _count = count - 1;
    setCount(_count); // button을 누르면 count에 1씩 더함
  };

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
