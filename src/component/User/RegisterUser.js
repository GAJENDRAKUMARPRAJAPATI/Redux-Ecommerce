import React, { useState } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

var initialState = {
  UserName: "",
  Email: "",
  Password: "",
  Age: "",
  Mobile: "",
};

const RegisterUser = () => {
  const [users, setUsers] = useState(initialState);
  const navigate= useNavigate()

  const handleSubmit = (event) => {
    console.log(users);
    event.preventDefault();
    setUsers({
      UserName: "",
      Email: "",
      Password: "",
      Age: "",
      Mobile: "",
    });
    navigate("/login")
    axios.post("http://127.0.0.1:8081/api/registerUser", users)
  };

  const handleInputChange = (event) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
   
  };

  return (
    <div className="RegisterContainer">
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <div className="details">
          <div className="mb-3 ">
            <label className="form-label">UserName</label>
            <input
              type="text"
              name="UserName"
              value={users.UserName}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3 ">
            <label className="form-label">Email</label>
            <input type="email" name="Email" value={users.Email}  onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3 ">
            <label className="form-label">Password</label>
            <input type="password" name="Password" value={users.Password} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3 ">
            <label className="form-label">Age</label>
            <input type="text" className="form-control"  name="Age" value={users.Age} onChange={handleInputChange} required />
          </div>
          <div className="mb-3 ">
            <label className="form-label">Mobile</label>
            <input type="text" className="form-control" name="Mobile" value={users.Mobile} onChange={handleInputChange} required />
          </div>
          <div className="d-flex">
            <div className="mb-3 ">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary"
                required
              />
            </div>
            <div className="ms-3">
              <Link
                to="/login"
                style={{ fontSize: "25px", fontFamily: "bold" }}
              >
                login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
