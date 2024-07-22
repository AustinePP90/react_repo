import { useState } from "react";

export const FormTest4 = () => {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
  };

  const handleBreakfast = (event) => {
    setHaveBreakfast(event.target.checked);
  };

  const handleGuest = (event) => {
    setNumberOfGuest(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">아침식사 여부:</label>
        <input
          type="checkbox"
          checked={haveBreakfast}
          onChange={handleBreakfast}
        />
        <br />
        <label htmlFor="">방문객 수:</label>
        <input type="number" value={numberOfGuest} onChange={handleGuest} />
        <button type="submit">제출</button>
        
      </form>
    </div>
  );
};
