import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "test@example.com" && password === "password") {
      navigate("/home"); 
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input type="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Log in</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

export default LoginPage;