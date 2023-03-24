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
import Cart from "./components/pages/cart/Cart";
import Lost from "./components/pages/lost/Lost"
import Payment from "./components/pages/payment/Payment"
import Authorized from "./protect/Authorized";
import Unauthorized from "./protect/Unauthorized";
import Profile from "./components/pages/profile/Profile";
import Wishlist from "./components/pages/wishlist/Wishlist";
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
          elem["presentInWishlist"] = false;
      });
      dispatch(setProducts(res));
    }
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Unauthorized Component= {Home}/>} />
        <Route path="/login" element={<Unauthorized Component= {Login}/>} />
        <Route path="/register" element={<Unauthorized Component= {Register}/>} />
        <Route path="/shop" element={<Authorized Component= {Shop}/>} />
        <Route path="/shop/:id" element={<Authorized Component= {Product}/>} />
        <Route path="/cart" element={<Authorized Component= {Cart}/>} />
        <Route path="/payment/:amount" element={<Authorized Component= {Payment}/>} />
        <Route path="/profile" element={<Authorized Component= {Profile}/>} />
        <Route path="/wishlist" element={<Authorized Component= {Wishlist}/>} />
        <Route path="/*" element={<Lost />} />
      </Routes>
    </>
  );
}

export default App;
