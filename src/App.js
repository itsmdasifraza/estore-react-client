import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/pages/home/Home.js";
import Login from "./components/pages/login/Login.js";
import Header from "./components/header/Header.js";
import Register from "./components/pages/register/Register.js";
import Shop from "./components/pages/shop/Shop.js";
import { useDispatch} from "react-redux";
import { setProducts } from "./redux/actions/products";
import axios from 'axios';
import products from "./products";
import React, { useEffect} from 'react'

function App() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    dispatch(setProducts(products));
    // let res = await axios.get(`https://fakestoreapi.com/products`);
    // res = await res.data;
    // console.log(res);
    // dispatch(setProducts(res));
    // localStorage.setItem("products", JSON.stringify(res));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
