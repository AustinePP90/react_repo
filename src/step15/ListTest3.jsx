const animals = ["고냥이", "호랭이", "멍뭉이"];
const fruits = ["바나나", "청포도", "복숭아"];

export const ListTest3 = () => {
  return (
    <div>
      <ul>
        {animals.map((animal, index) => {
          return (
            <li key={index}>
              {index}.{animal}
            </li>
          );
        })}
        <li>{[fruits[0], ...animals]}</li>
      </ul>
    </div>
  );
};
