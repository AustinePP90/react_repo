import { useState } from "react";

const MAX_CAPACITY = 10;

export const Gate = () => {
  const [count, setCount] = useState(0);
  const [isFull, setIsFull] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const increaseCount = () => {
    let _count = count + 1;
    setCount(_count); // button을 누르면 count에 1씩 더함
    setIsFull(_count >= MAX_CAPACITY); // _count가 MAX_CAPACITY와 같아지면 true로 변함
    setIsEmpty(_count <= 0); // _count가 0이 되기 전까지 false, 0이 되면 true로 변함
  };

  const decreaseCount = () => {
    let _count = count - 1;
    setCount(_count); // button을 누르면 count에 1씩 더함
    setIsFull(_count >= MAX_CAPACITY); // _count가 MAX_CAPACITY와 같아지면 true로 변함
    setIsEmpty(_count <= 0); // _count가 0이 되기 전까지 false, 0이 되면 true로 변함
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

  // const maxCapacity = 5;
  // const [number, setNumber] = useState(0);
  // const [full, setFull] = useState(false);
  // const [empty, setEmpty] = useState(true);

  // const plusNumber = () => {
  //   let updateNum = number + 1;
  //   setNumber(updateNum);
  //   setFull(updateNum >= maxCapacity);
  //   setEmpty(updateNum <= 0);
  // };

  // const minusNumber = () => {
  //   let updateNum = number - 1;
  //   setNumber(updateNum);
  //   setFull(updateNum >= maxCapacity);
  //   setEmpty(updateNum <= 0);
  // };

  // return (
  //   <div>
  //     <p>총 {number}명 수용했습니다!</p>
  //     <button disabled={full} onClick={plusNumber}>
  //       들어가요
  //     </button>
  //     <button disabled={empty} onClick={minusNumber}>
  //       나가요
  //     </button>
  //     <p>
  //       {full
  //         ? "정원 초과 정원 초과 경고!!!"
  //         : empty
  //         ? "인원 부족 인원 부족 경고!!!"
  //         : null}
  //     </p>
  //   </div>
  // );
};
