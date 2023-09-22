import React, { useEffect, useState } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const initailState = {
  Email: "",
  Password: "",
};

const Login = () => {
  const [users, setUsers] = useState(initailState);
  const [userData, setUserData] = useState([]);
  console.log(userData, "userData");

  useEffect(() => {
    axios.get("http://127.0.0.1:8081/api/login").then((res) => {
      setUserData(res.data);
    });
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log(users, "users");
    event.preventDefault();
    // navigate("/buyProducts");

    const user = userData.find(
      (user) => user.Email === users.Email && user.Password === users.Password
    );
    console.log(user, "oooooooooooo");
    if (user) {
      alert("Login successful");
      navigate("/buyProducts");
      localStorage.setItem("LoginUser", JSON.stringify(user));
    } else {
      alert("Email and password do not match.");
    }
  };

  const handleInputChange = (event) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="LoginContainer">
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="mb-3 ">
          <label>Email</label>
          <input
            type="email"
            name="Email"
            value={users.Email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="text"
            name="Password"
            value={users.Password}
            onChange={handleInputChange}
            className="form-control "
            required
          />
        </div>
        <div className="d-flex">
          <div className="mb-3">
            <input
              type="submit"
              value="Login"
              className=" btn btn-primary button"
            />
          </div>
          <div className="ms-5">
            <Link
              to="/register"
              style={{ fontSize: "25px", fontFamily: "bold" }}
            >
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
