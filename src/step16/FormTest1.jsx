import { useEffect, useState } from "react";

export const FormTest1 = () => {
  const [value, setValue] = useState("");
  const [isSumitted, setIsSumitted] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("입력중...");
    setIsSumitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSumitted(true);
    console.log(`제출완! ${value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>이름</label>
        <input type="text" id="name" onChange={handleChange} />
        <button type="submit">제출</button>
        {isSumitted && <p>결과값은??? {value}</p>}
      </form>
    </div>
  );
};
