import React from "react";
//import Button from '@mui/material/Button';
import "./Login.css";
const Login = () => {

    function generateToken() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let result = '';
        for (var i = 0; i < 16; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    (()=>{
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/shop";
        }
    })();
    // function guard() {
    //     if (localStorage.getItem("currentUser")) {
    //         window.location.href = "/shop";
    //     }
    // }

    const loginForm = (event) => {
        event.preventDefault();
        // error.innerHTML = "";
        let users = JSON.parse(localStorage.getItem("users"));
        users.forEach(element => {
            if (element.email === loginForm.target[0].value && element.pass === loginForm.target[1].value) {
                let currentUser = element;
                currentUser["token"] = generateToken();
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                // redirect to login page
                window.location.href = "/shop";
            }
        });
        //error.innerHTML = "<small class='text-danger'>Authentication Failed</small>";
        // wrong password
    }
    return (
        <>
            <section>
                <div className="container-fluid pt-4">
                    <h1>Login</h1>
                    <div id="error"></div>
                    <form onSubmit={loginForm}>
                        <div className="form-group pb-3">
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                placeholder="Email" required />
                        </div>
                        <div className="form-group pb-3">
                            <input type="password" className="form-control" id="pass" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn btn-dark">Login</button>
                    </form>
                </div>

            </section>
        </>
    );
}

export default Login;