import "./LoginBox.css";

export function LoginBox() {
  return (
    <body>
      <div class="login-container">
        <form>
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button>Login</button>
        </form>
      </div>
    </body>
  );
}
