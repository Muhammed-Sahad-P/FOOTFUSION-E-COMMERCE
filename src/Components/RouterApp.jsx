import React from 'react'
import Home from './Home'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Collection from '../Pages/Collection'
import Cart from '../Pages/Cart'
import Sale from '../Pages/Sale'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import Contact from '../Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Navbar from "../Components/Navbar";
const RouterApp = () => {
  return (
    <div>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default RouterApp