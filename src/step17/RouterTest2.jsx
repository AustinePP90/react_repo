import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { About2 } from "./pages/About2";
import { AboutDetails } from "./pages/AboutDetails";

export const RouterTest2 = () => {
  return (
    <Router>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">도움말</Link> |{" "}
        <Link to="/about2">도움말2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />}>
          <Route path="details" element={<AboutDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};
