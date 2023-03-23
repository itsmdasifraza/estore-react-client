import React from "react";
import "./Login.css";
import environment from "../../../environments/environment.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    document.title = `Login | ${environment.app.name}`;

    function generateToken() {
        let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let result = '';
        for (var i = 0; i < 16; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    const loginForm = (event) => {
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem("users"));
        if(users){
            users.forEach(element => {
                if (element.email === event.target["email"].value && element.pass === event.target["pass"].value) {
                    let currentUser = element;
                    currentUser["token"] = generateToken();
                    localStorage.setItem("currentUser", JSON.stringify(currentUser));
                    navigate(`/shop`);
                }
            });
        }
        //else{} //register first
        //error.innerHTML = "<small className='text-danger'>Authentication Failed</small>";
        // wrong password
    }
    return (
        <>
            
            <section>
                <div className="admin-login">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-4 col-sm-3 col-12"></div>
                            <div className="col-md-4 col-sm-6 col-12">
                                <div className="login">
                                    <div className="d-flex justify-content-between">
                                        <h1>LOGIN</h1>
                                    </div>

                                    <form onSubmit={loginForm}>
                                        <input type="email"  id="email" name="email" aria-describedby="emailHelp"
                                            placeholder="Email" required />
                                        <input type="password"  id="pass" name="pass" placeholder="Password" required />

                                        <button type="submit" >Login</button>
                                        <br />

                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-3 col-12"></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Login;