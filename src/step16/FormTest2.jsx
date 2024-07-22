import { useState } from "react";

export const FormTest2 = () => {
  const [contents, setContents] = useState("");
  const [isSumitted, setIsSumitted] = useState("false");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSumitted(true);
    console.log(`제출완! ${contents}`);
  };

  const onChange = (event) => {
    setContents(event.target.value);
    setIsSumitted(false);
    console.log("입력중...");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          요청사항:
          <textarea
            placeholder="의견을 전달해 주세요!"
            value={contents}
            onChange={onChange}
          ></textarea>
        </label>
        <button type="submit">제출</button>
        {isSumitted && <p>오늘의 루머: {contents}</p>}
      </form>
    </div>
  );
};
