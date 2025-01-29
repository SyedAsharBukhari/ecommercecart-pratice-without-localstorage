import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Cart({ cart, setcart }) {


  // useEffect(() => {
  //   setcart((previous) =>
  //     previous.map((item) =>
  //       item.count === undefined ? { ...item, count: 1 } : item
  //     )
  //  );
  // }, [setcart]);

  
  // cart.forEach((element) => {
  //   element.count = 1;
  // });
  // console.log(cart);                                          


  // Delete item by ID
  const handeldelete = (id) => {
    const filtereditem = cart.filter((item) => item.id !== id);
    setcart(filtereditem);
  };

  // Increment quantity
  const handeladd = (id) => {
    setcart((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 , item, price: item.price * item.count } : item
      )
    );
  };

  // Decrement quantity (ensure it doesn't go below 1)
  const handelreduce = (id) => {
    setcart((previous) =>
      previous.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <Container>
        <Row>
          {cart.map((item) => (
            <Col
              lg={12}
              key={item.id}
              style={{
                border: "2px solid black",
                margin: "20px",
                display: "flex",
              }}
            >
              <img src={item.image} width={"20%"} alt="product" />
              <div>
                <h3>{item.category}</h3>
                <h5>Price : {item.price}</h5>
                <p style={{ fontSize: "16px" }}>{item.title}</p>
                <div className="d-flex gap-4">
                  {/* Increment Button */}
                  <button onClick={() => handeladd(item.id)}>+</button>
                  {/* Display Current Quantity */}
                  <h3>{item.count}</h3>
                  {/* Decrement Button */}
                  <button onClick={() => handelreduce(item.id)}>-</button>
                </div>
                <button
                  className="m-5"
                  onClick={() => handeldelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
