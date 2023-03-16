import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./components/pages/home/Home.js";
import Login from "./components/pages/login/Login.js";
function App() {
  return (
    <>
     <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
