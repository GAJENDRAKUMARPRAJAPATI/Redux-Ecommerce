import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Styel.css";

const OrdersComponent = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders, "orders");


  useEffect(() => {
    axios.get("http://127.0.0.1:8081/api/getOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);
  return (
    <div className="container mt-3">
        <h2>Admin</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>User Info</th>
            <th>User Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>
                <>
                  {item.title.map((title, idx) => (
                    <div key={idx}>{title +","}</div>
                  ))}
                </>
              </td>
              <td>
                <>
                  {item.price.map((title, idx) => (
                    <div key={idx}>{title +","}</div>
                  ))}
                </>
              </td>
              <td>
                <>
                  {item.categories.map((title, idx) => (
                    <div className="titles" key={idx}>
                      {title +","}
                    </div>
                  ))}
                </>
              </td>
              <td>
                <>
                  {item.quantities.map((title, idx) => (
                    <div key={idx}>{title }</div>
                  ))}
                </>
              </td>
              <td>{item.totalPrice}</td>
              <td>
                <div>
                  <strong>User Name:</strong> {item.UserName}
                </div>
                <div>
                  <strong>Email:</strong> {item.Email}
                </div>
                <div>
                  <strong>Mobile:</strong> {item.Mobile}
                </div>
              </td>
              <td>
                <div>
                    <strong>Name : {item.Name}</strong>
                </div>
                <div>
                    <strong>Mobile : {item.Mobile}</strong>
                </div>
                <div>
                    <strong>Address : {item.Address}</strong>
                </div>
                <div>
                    <strong>H. No : {item.H_No}</strong>
                </div>
                <div>
                    <strong>Street : {item.Street}</strong>
                </div>
                <div>
                    <strong>Pin Code : {item.Pin_Code}</strong>
                </div>
                <div>
                    <strong>Land Mark: {item.Land_Mark}</strong>
                </div>
                <div>
                    <strong>State: {item.State}</strong>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersComponent;
