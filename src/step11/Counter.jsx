import React from "react";
import { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    document.title = `총 ${count}번 클릭`;
  }, [count]);

  {
    console.log(count);
  }

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <p>총 {count2}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      <button onClick={() => setCount2(count2 + 1)}>클릭</button>
    </div>
  );
};

// import React from 'react';
// const MyComponent = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };
// export default MyComponent;
