const animals = ["고냥이", "호랭이", "멍뭉이"];

export const ListTest2 = () => {
  return (
    <div>
      <ul>
        <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li>
        <li>{animals}</li>
      </ul>
    </div>
  );
};
