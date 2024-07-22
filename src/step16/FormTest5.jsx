import { useState } from "react";

export const FormTest5 = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`이름: ${name} 성별: ${gender}`);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          이름: <input type="text" value={name} onChange={handleChangeName} />
        </label>

        <br />
        <label>
          성별:{" "}
          <select value={gender} onChange={handleChangeGender}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </label>

        <button type="submit">제출</button>
      </form>
    </div>
  );
};
