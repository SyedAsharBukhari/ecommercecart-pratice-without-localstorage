import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Cart from '../Cart'
import About from '../About'
import Service from '../Service'
import Header from '../Header'


function Config() {
  const [arr, setarr] = useState([])
const [fetchdata, setfetchdata] = useState("")
const [cart, setcart] = useState([])

useEffect(()=>{
  const filterdata = arr.filter((prev)=> prev.id == fetchdata)
  setcart([...cart,...filterdata])
},[fetchdata])



// console.log("hello..........", setcart);


  return (
    <div>
        <BrowserRouter>
        <Header cart={cart}/>
        <Routes>
            <Route path="/" element={<Home setfetchdata={setfetchdata} setarr={setarr} />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/cart" element={<Cart cart={cart} setcart={setcart}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Config