import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/pages/home/Home.js";
import Login from "./components/pages/login/Login.js";
import Header from "./components/header/Header.js";
import Register from "./components/pages/register/Register.js";
import Shop from "./components/pages/shop/Shop.js";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </>
  );
}

export default App;
