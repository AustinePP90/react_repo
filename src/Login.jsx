import "./login.css";

export function Login() {
  const mainDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#eee",
  };

  const divStyle = {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    width: "500px",
    margin: "0 auto",
    textAlign: "center",
    borderRadius: "5px",
    boxShadow: "3px 4px 4px #ccc",
  };

  const h1Ele = {
    fontSize: "2rem",
    fontWeight: "900",
  };

  const inputEle = {
    display: "block",
    width: "80%",
    height: "20px",
    margin: "0 auto 10px auto",
    padding: "5px 10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    borderRadius: "5px",
  };

  const loginEle = {
    color: "#fff",
    backgroundColor: "blue",
    border: "1px solid blue",
    boxShadow: "1px 2px 3px blue",
    width: "60%",
    padding: "8px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  };

  const pEle = {
    color: "#444",
  };

  const aEle = {
    color: "blue",
    fontWeight: "550",
  };

  return (
    <div style={mainDiv}>
      <div style={divStyle}>
        <h1 style={h1Ele}>Login</h1>
        <input type="text" placeholder="Username" style={inputEle} />
        <input type="password" placeholder="password" style={inputEle} />
        <button style={loginEle}>Login</button>
        <p style={pEle}>
          Don't have an account?{" "}
          <a href="#" style={aEle}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
