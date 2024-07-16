import ReactDOM from "react-dom/client";
import { App } from "./App";
// const App = () => {
//   return <p>안녕하세요</p>;
// };

// function App() {
//   return (
//     <>
//       <p>안녕하세요</p>
//       <p>반갑습니다.</p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
