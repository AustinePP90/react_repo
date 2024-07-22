import { useState } from "react";

export const FormTest3 = () => {
  const [menus, setMenus] = useState("...");
  const [isSumitted, setIsSumitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSumitted(true);
    console.log(`맛있는 과일을 골랐어요! => ${menus}`);
  };

  const onChange = (event) => {
    setMenus(event.target.value);
    setIsSumitted(false);
    console.log("군침을 흘리는 중...");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <select id="menu" value={menus} onChange={onChange}>
          <option value="🍎apple🍎">Apple🍎</option>
          <option value="🍌banana🍌">Banana🍌</option>
          <option value="🍇grape🍇">Grape🍇</option>
          <option value="🍈melon🍈">Melon🍈</option>
        </select>
        <button type="submit">제출</button>
        {isSumitted ? (
          <p>당신이 고른 맛있는 과일은? {menus}</p>
        ) : (
          <p>군침을 맛있게 흘리는 중...🤤</p>
        )}
      </form>
    </div>
  );
};
