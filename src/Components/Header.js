import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {  Link } from 'react-router-dom'

function Header({cart}) {
  return (
    <div>
        <Container fluid style={{backgroundColor: "blue", padding: "18px"}}>
<Container>
    <Row>
<Col lg={6}>
<ul style={{display:"flex", listStyle:"none", gap:"100px", margin: "0"}}>
    <li><Link style={{textDecoration: "none", color: "white", fontWeight:"bold", fontSize:"18px"}} to="/">Home</Link></li>
    <li><Link style={{textDecoration: "none", color: "white", fontWeight:"bold", fontSize:"18px"}} to="/about">About</Link></li>
    <li><Link style={{textDecoration: "none", color: "white", fontWeight:"bold", fontSize:"18px"}} to="/service">Service</Link></li>
</ul>
</Col>

<Col lg={6}>
<ul style={{listStyle:"none", margin: "0", textAlign:"end"}}>
    <li><Link style={{textDecoration: "none", color: "white", fontWeight:"bold", fontSize:"18px"}} to="/cart">Cart: {cart.length}</Link></li>
</ul>
</Col>

    </Row>
</Container>
        </Container>
    </div>
  )
}

export default Header