import { useLocation } from "react-router-dom";
const users = [
  { id: 1, name: "대한", job: "무직", hobby: "football" },
  { id: 2, name: "민국", job: "가수", hobby: "steal" },
  { id: 3, name: "만세", job: "화가", hobby: "game" },
];

export const Search = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query");
  const user = users.find((user) => user.hobby === query);
  return (
    <div>
      {user ? (
        <div>
          <h2>찾는 취미는? {query}</h2>
          <p>이름: {user.name}</p>
          <p>직업: {user.job}</p>
        </div>
      ) : (
        <p>그런 사람 또 없습니다!</p>
      )}
    </div>
  );
};
