import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const loginData = [
  {
    logo: "https://img.icons8.com/?size=100&id=62&format=png&color=000000",
    name: "Login with Email",
  },
  {
    logo: "https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000",
    name: "Login with Google",
  },
  {
    logo: "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000",
    name: "Login with Facebook",
  },
  {
    logo: "https://img.icons8.com/?size=100&id=WWXOYwjdxZE8&format=png&color=000000",
    name: "Login with Apple",
  },
];
function App() {
  return (
    <div className="app">
      <Header />
      <Breakline />
      <Info />
      <Divider />
      <Login />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <div>
        <span className="cross">X</span>
      </div>
      <div>
        <h2 className="header-text">Log in</h2>
      </div>
    </div>
  );
}
function Breakline() {
  return <div className="line-break"></div>;
}
function Info() {
  return (
    <>
      <form>
        <div>
          <input
            className="inp"
            type="text"
            placeholder="Phone Number Or Email Address"
            required
          />
        </div>
        <div>
          <input
            className="inp"
            type="password"
            placeholder="Password"
            required
          />
        </div>
      </form>
      <button className="btn">Continue</button>
    </>
  );
}
function Divider() {
  return (
    <div className="divider">
      <hr className="line" />
      <span>Or</span>
      <hr className="line" />
    </div>
  );
}
function Login() {
  return (
    <main className="menu">
      <ul className="loginoptions">
        {loginData.map((option) => (
          <LoginOption login={option} key={option.name} />
        ))}
      </ul>
    </main>
  );
}
function LoginOption({ login }) {
  return (
    <li className="option">
      <img className="img" src={login.logo} alt={login.name} />
      <p>{login.name}</p>
    </li>
  );
}
function Footer() {
  return (
    <p className="footer">
      Don't have an account?
      <a className="link" href="google.com">
        Create an Account
      </a>
    </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
