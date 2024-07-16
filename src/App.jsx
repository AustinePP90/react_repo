import { ColoredMessage } from "./ColoredMessages";

export function App() {
  const divStyle = {
    border: "1px solid #ccc",
  };

  const pStyle = {
    color: "#fff",
    backgroundColor: "#999",
    paddingLeft: "0.5rem",
  };

  const btnStyle = {
    // display: "block",
    backgroundColor: "#999",
    color: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "2px 3px 5px #999",
    margin: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    fontWeight: "900",
    cursor: "pointer",
  };

  const aaa = () => {
    alert("깡아지");
  };

  return (
    <div style={divStyle}>
      {console.log("test")}
      <p
        style={{
          color: "#fff",
          backgroundColor: "#ccc",
          paddingLeft: "0.5rem",
        }}
      >
        안녕하세요
      </p>
      <p style={pStyle}>반갑습니다</p>
      <p style={pStyle}>어서오세요</p>
      <p
        style={{
          backgroundColor: "#777",
          color: "#fff",
          paddingLeft: "0.5rem",
        }}
      >
        편히쉬세요
      </p>
      <ColoredMessage color="red" message="안녕"></ColoredMessage>
      <ColoredMessage color="blue" message="하이"></ColoredMessage>
      <button style={btnStyle} onClick={aaa}>
        버튼
      </button>
    </div>
  );
}
