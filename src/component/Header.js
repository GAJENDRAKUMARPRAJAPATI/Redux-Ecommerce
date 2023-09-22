import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Styel.css";
import { Modal } from "antd";

const Header = () => {
  const[openProfile, setOpenProfile]=useState(false)

  const getLogin= JSON.parse(localStorage.getItem("LoginUser"))
  console.log(getLogin, 'getLogin, getLogin');

  const showProfile = () => {
    setOpenProfile(true);
  }

  return (
    <div id="headers">
      <Navbar className="header" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-white me-4">
           Home
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/buyProducts" className="text-decoration-none text-white me-4">
             Add to card
            </NavLink>
            <NavLink to="/" className="text-decoration-none text-white me-4">
              Person
            </NavLink>
          </Nav>
          <NavLink to="/viewOrders" className="text-decoration-none text-white me-4">
              View Orders
            </NavLink>
            <NavLink  className="text-decoration-none text-white me-4 ">
            <i class="fa-solid fa-user " style={{fontSize:"27px"}} onClick={showProfile} ></i>
            </NavLink>
        </Container>
      </Navbar>

      <Modal
        title="User Profile"
        open={openProfile}
        onOk={()=> setOpenProfile(false)}
        onCancel={()=> setOpenProfile(false)}
      >
        <div>
          <p>User Name {getLogin.UserName}</p>
          <p>User Email {getLogin.Email}</p>
          <p>User Mobile {getLogin.Mobile}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
