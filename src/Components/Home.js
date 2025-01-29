import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Home({ setfetchdata, setarr }) {
  const [value, setvalue] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setvalue(res.data);
        setarr(res.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [setarr]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  // console.log("value", value);

  function addtocard(id) {
    toast.success("product added successfully");
    setfetchdata(id);
  }

  return (
    <Container className="my-5">
      <Toaster />
      <Row>
        {value.map((apidata) => {
          return (
            <Col md={3} className="my-2" key={apidata.id}>
              <div
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  border: "2px solid black",
                }}
              >
                <img src={apidata.image} width={"100%"} />

                <div style={{ padding: "10px" }}>
                  <h3>{apidata.category}</h3>
                  <h5>Price : {apidata.price} </h5>
                  <p style={{ fontSize: "16px" }}>{apidata.title}</p>
                  <button onClick={() => addtocard(apidata.id)}>
                    Add to card
                  </button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home;
