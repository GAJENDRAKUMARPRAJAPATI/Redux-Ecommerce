import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import axios from "axios";
import "./Styel.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { DLT } from "../Redux/Actions/Action";
import { Modal } from "antd";

const CardHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);
  const [isClose, setIsClose] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const navigate = useNavigate()

  const getLoginUser = JSON.parse(localStorage.getItem("LoginUser"));
  //console.log(getLoginUser, "getLoginUser");

  const getdata = useSelector((state) => state.cartreducer.carts);
  
  const ordersData = () => {
    navigate("/finalOrder")
  };

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((item) => {
      price = item.price * item.quantity + price;
    });
    
    setPrice(price.toFixed(2));
  };

  useEffect(() => {
    total();
  }, [total]);

  const handleProfile = () => {
    setIsOpenProfile(true);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id="headers">
      <Navbar className="header" variant="dark">
        <Container>
          <NavLink
            to="/buyProducts"
            className="text-decoration-none text-white me-4"
          >
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-white me-4">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getdata.length}
            color="primary"
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-white"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
          <Badge onClick={handleProfile}>
            <i
              className="fa-solid fa-user text-white ms-5"
              style={{ fontSize: 28, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        {/* modal */}
        <Modal
          title="User Details"
          open={isOpenProfile}
          onCancel={() => setIsOpenProfile(false)}
          onOk={() => setIsOpenProfile(false)}
        >
          <div>
            <p>User Name: {getLoginUser.UserName}</p>
            <p>User Email: {getLoginUser.Email}</p>
            <p>User Mobile: {getLoginUser.Mobile}</p>
          </div>
        </Modal>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length > 0 ? (
            <div className="card_details">
              <div style={{ padding: "10px" }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>description</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <NavLink
                              to={`/cardsDetails/${item.id}`}
                              onClose={handleClose}
                            >
                              <img
                                style={{ width: "40px" }}
                                src={item.image}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td style={{ fontSize: "13px" }}>{item.title}</td>
                          <td>₹ {item.price}</td>
                          <td style={{ fontSize: "13px" }}>
                            {item.description}
                          </td>
                          <td>Qnty-{item.quantity}</td>

                          <td>
                            <p
                              style={{ cursor: "pointer" }}
                              onClick={() => dlt(item.id)}
                            >
                              <i
                                class="fa-sharp fa-solid fa-trash"
                                style={{ color: "red" }}
                              ></i>
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                    <p className="text-center"> Total:{price}</p>
                    <div className="ms-5 align-item-center">
                      <button onClick={()=>ordersData(isClose)}>Order</button>
                    </div>
                  </tbody>
                </Table>
              </div>
            </div>
          ) : (
            <div className="card_details">
              <i
                className="fas fa-close"
                style={{
                  position: "absolute",
                  marginLeft: "90%",
                  marginTop: 0,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              ></i>
              <p style={{ fontSize: "15px", marginTop: "10px" }}>
                Your cart empty
              </p>
              <img
                className="emptycart_img"
                style={{
                  width: "5rem",
                  padding: 8,
                  height: "70px",
                  borderRadius: "20px",
                  marginTop: "10px",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0j8gHMuPhd5V2MvRGV7PzsEgzDQTHta_RYjOZRPseUw&usqp=CAU&ec=48665701"
                alt=""
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
};

export default CardHeader;
