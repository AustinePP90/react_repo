import { useState } from "react";

export const useCounter = (iniValue) => {
  const [count, setCount] = useState(iniValue);
  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    setCount((count) => Math.max(count - 1, 0));
  };
  return [count, increase, decrease];
};
