import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>
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
        <p>
          Already have an account?{"    "}
          <span>
            Log in <Link to="/login"> here</Link>
          </span>
        </p>
        <button disabled={isLoading}>Sign up</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default Signup;
