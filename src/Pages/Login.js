import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    console.log(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <div className="input">
        <label htmlFor="">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="input">
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="button-con">
        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default Login;