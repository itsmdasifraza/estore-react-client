import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <section>
                <nav>
                    <div class="brand">
                        <a href="/">eStore</a>
                    </div>
                    <div class="nav-items">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/profile">Profile</Link>
                        {/* <a href="/">Home</a>
                        <a href="/login">Login</a>
                        <a href="/signup">Signup</a>
                        <a href="/shop">Shop</a>
                        <a href="/cart">Cart</a>
                        <a href="/profile">Profile</a> */}
                    </div>
                </nav>
            </section>
        </>
    );
};
export default Header;