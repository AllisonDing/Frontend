// Auth.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = ({ setLoggedInUser }) => {
  return (
    <div className="auth">
      <Login setLoggedInUser={setLoggedInUser} />
      <Register />
    </div>
  );
};

const Login = (setLoggedInUser) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    // 从 localStorage 中获取已注册的用户列表
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 检查用户名和密码是否匹配
    const user = users.find((u) => u.username === username);

    if (user && isPasswordCorrect(user.password, password)) {
      alert("Login successful!");
      navigate("/");
      // Store the logged-in user in the App component's state
      setLoggedInUser(user);
    } else {
      alert("Invalid username or password.");
    }
  };

  const isPasswordCorrect = (storedPassword, inputPassword) => {
    // 这里可以添加密码验证的逻辑
    // 例如使用加密算法比较密码是否相同
    return storedPassword === inputPassword;
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Login"
      onSubmit={onSubmit}
    />
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserRegistered = users.some((user) => user.username === username);

    if (isUserRegistered) {
      alert("Username already registered. Please choose a different username.");
      return;
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration completed! You can now login.");
  };

  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Register"
      onSubmit={onSubmit}
    />
  );
};

const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
  return (
    <>
      <div className="auth-container">
        <form onSubmit={onSubmit}>
          <h2>{label}</h2>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit">{label}</button>
        </form>
      </div>
    </>
  );
};