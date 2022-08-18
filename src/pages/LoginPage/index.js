import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/thunk";
import "./styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("miriam@miriam.com");
  const [password, setPassword] = useState("miriam");

  const dispatch = useDispatch();

  const submitLogin = (event) => {
    event.preventDefault();
    console.log("Login cred: ", email, password);
    dispatch(login(email, password));
  };

  return (
    <div className="container-loginpage">
      <h1>Login</h1>
      <form onSubmit={submitLogin}>
        <p>
          <input
            className="input-login"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
          />
        </p>
        <p>
          <input
            className="input-login"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { LoginPage };
