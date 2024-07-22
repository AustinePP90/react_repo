import { Link, Outlet } from "react-router-dom";

export const About2 = () => {
  return (
    <div>
      <h2>도움말2</h2>
      <nav>
        <Link to="details">도움말 상세 보기</Link>
      </nav>
      <Outlet />
    </div>
  );
};
