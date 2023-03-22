import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/pages/home/Home.js";
import Login from "./components/pages/login/Login.js";
import Header from "./components/header/Header.js";
import Register from "./components/pages/register/Register.js";
import Shop from "./components/pages/shop/Shop.js";
import { useDispatch} from "react-redux";
import { setProducts } from "./redux/actions/productsAction";
import axios from 'axios';
import React, { useEffect} from 'react'
import Product from "./components/pages/product/Product";

function App() {
  const dispatch = useDispatch();

  

  useEffect(() => {
    const fetchProducts = async () => {
      let data = localStorage.getItem("products");
      data = JSON.parse(data);
      if(data) {
        dispatch(setProducts(data));
        return;
      }
      
      let res = await axios.get(`https://fakestoreapi.com/products`);
      res = await res.data;
      // console.log(res);
      res.forEach((elem)=>{
          elem["presentInCart"] = false;
      });
      dispatch(setProducts(res));
    }
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
