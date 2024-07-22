import { useParams } from "react-router-dom";
const users = [
  { id: 1, name: "대한", job: "무직" },
  { id: 2, name: "민국", job: "가수" },
  { id: 3, name: "만세", job: "화가" },
];

export const User = () => {
  const { id } = useParams();
  const user = users.find((item) => item.id === Number(id));
  return (
    <div>
      {user ? (
        <div>
          <h2>사용자 아이디: {id}</h2>
          <p>이름: {user.name}</p>
          <p>직업: {user.job}</p>
        </div>
      ) : (
        <p>사용자 없음!</p>
      )}
    </div>
  );
};
