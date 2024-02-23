import React, { useState } from "react";
import "./Login.css";
import "./Registration.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
//   const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email);
   
    let storedemail = localStorage.getItem("email");
    let storedpassword = localStorage.getItem("password");

    if (storedemail == email)
      if (storedpassword == password) {
        localStorage.setItem("stored", 1)
        navigate("/")
      }
  };

  return (
    <div className="Login">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              savedemail={localStorage.getItem("email")}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              savedassword={localStorage.getItem("password")}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account?</p>
        <a href="Register">Register</a>
      </div>
    </div>
  );
}

export default Login;
