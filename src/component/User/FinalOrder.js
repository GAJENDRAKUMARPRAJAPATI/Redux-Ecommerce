import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const initialState = {
  Name: "",
  Mobile: "",
  Address: "",
  H_No: "",
  Street: "",
  Pin_Code: "",
  Land_Mark: "",
  State: "",
};

const FinalOrder = () => {
  const [userDetails, setUserDetails] = useState(initialState);
  const navigate = useNavigate();

  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData, "getData getData getData getData");

  const getTotlPrice = JSON.parse(localStorage.getItem("totalPrices"));
    console.log(getTotlPrice, 'getTotlPrice getTotlPrice');
  const totalPrices = {
    totalPrice: getTotlPrice.totalPrice
   
  };
  console.log(totalPrices, 'totalPrices totalPrices ')
  //   localStorage.setItem("totalPrices", JSON.stringify(totalPrices))
  const getLoginUser = JSON.parse(localStorage.getItem("LoginUser"));
  //console.log(getLoginUser, "getLoginUser");

  const getLogin = {
    UserName: getLoginUser.UserName,
    Email: getLoginUser.Email,
    Mobile: getLoginUser.Mobile,
  };

  const titles = [];
  const prices = [];
  const categories = [];
  const quantities = [];

  for (let item of getData) {
    titles.push(item["title"]);
    prices.push(item["price"]);
    categories.push(item["category"]);
    quantities.push(item["quantity"]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(userDetails, "userDetails");
    setUserDetails({
      Name: "",
      Mobile: "",
      Address: "",
      H_No: "",
      Street: "",
      Pin_Code: "",
      Land_Mark: "",
      State: "",
    });
    let obj = {
      title: titles,
      price: prices,
      categories: categories,
      quantities: quantities,
      ...getLogin,
      ...totalPrices,
      ...userDetails,
    };
    console.log(obj, "obj, obj, obj");

    axios.post("http://127.0.0.1:8081/order", obj);
    navigate("/orders");
  };

  const handleInputChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="OrderContainer">
      <h2>User Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={userDetails.Name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="text"
            name="Mobile"
            value={userDetails.Mobile}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={userDetails.Address}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>H. No</label>
          <input
            type="text"
            name="H_No"
            value={userDetails.H_No}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Street</label>
          <input
            type="text"
            name="Street"
            value={userDetails.Street}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Pin code</label>
          <input
            type="text"
            name="Pin_Code"
            value={userDetails.Pin_Code}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>State</label>
          <input
            type="text"
            name="State"
            value={userDetails.State}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Land Mark</label>
          <input
            type="text"
            name="Land_Mark"
            value={userDetails.Land_Mark}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="submit"
            className=" btn btn-primary submitButton"
          />
        </div>
      </form>
    </div>
  );
};

export default FinalOrder;
