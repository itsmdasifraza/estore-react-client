import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
const Header = () => {
    const login = useSelector((state) => state.login);
    const navigate = useNavigate();
    return (
        <>
            <section className= "header">
                <nav>
                    <div className="brand">
                        <Link to="/">eStore</Link>
                    </div>
                    <div className="nav-items">
                    {!login ? <Link to="/">Home</Link> : <></>}
                    {!login ? <Link to="/login">Login</Link> : <></>}
                    {!login ? <Link to="/register">Register</Link> : <></>}
                    {login ? <Link to="/shop">Shop</Link> : <></>}
                    {login ? <Link to="/cart">Cart</Link> : <></>}
                    {login ? <Link to="/profile">Profile</Link> : <></>}
                    {login ? <Button onClick={()=>{
                        localStorage.removeItem("currentUser");
                        navigate('/login');
                    }} variant="contained" size="medium">Logout</Button> : <></>}
                    </div>
                </nav>
            </section>
        </>
    );
};
export default Header;