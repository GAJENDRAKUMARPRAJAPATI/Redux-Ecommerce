import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./Styel.css";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/Actions/Action";

const Cards = () => {
  const [cardData, setCardData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (data) => {
    //console.log(data ,'event');
    dispatch(ADD(data));
  };

  return (
    <div className="cards mt-0">
      <div className="cartItems">
        {cardData.map((item) => (
          <div key={item.id}>
            <Card
              className="carts"
              style={{
                width: "20rem",
                height: "24rem",
                marginRight: "10px",
                marginBottom: "5px",
              }}
            >
              <Card.Img variant="top" src={item.image} className="cartImage" />
              <Card.Body>
                <Card.Title className="cart-Title">{item.title}</Card.Title>
                <Card.Text>
                  <div className="d-flex  justify-content-between">
                    <p>Price: ₹ {item.price}</p>
                    <p>Rating :{item.rating.rate}</p>
                  </div>
                </Card.Text>
              </Card.Body>
              <Button
                onClick={() => send(item)}
                variant="primary"
                className="cart-button"
              >
                Add to Cart
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
