import { ColoredMessage } from "./components/ColoredMessages";
import { ColoredMessage2 } from "./components/ColoredMessages2";

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
    alert("장충동왕족발보쌈");
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
      <p style={pStyle}>편히쉬세요</p>
      <ColoredMessage
        color="#fff"
        backgroundColor="#666"
        message="안녕"
        paddingLeft="0.7rem"
      ></ColoredMessage>
      <ColoredMessage
        color="#fff"
        backgroundColor="#555"
        message="하이"
        paddingLeft="0.7rem"
      ></ColoredMessage>
      <ColoredMessage2 color="#fff" backgroundColor="#444" paddingLeft="0.7rem">
        내가돌아왔어요
      </ColoredMessage2>
      <button style={btnStyle} onClick={aaa}>
        버튼
      </button>
    </div>
  );
}
