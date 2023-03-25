import React, { useEffect, useState } from "react";
import "./Password.css";
import environment from "../../../environments/environment.js";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../../buttons/ThemeButton";
const Password = () => {
    let navigate = useNavigate();
    document.title = `Change password | ${environment.app.name}`;

    let [currUser, setCurrUser] = useState({});
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("currentUser"));
        if(user){
            setCurrUser(user);
        }
    },[]);

    function passwordMatch(pass1, pass2){
        if(pass1 === pass2) return true;
        return false;
    }
    function logout(){
        localStorage.removeItem("currentUser");
        navigate("/login");
    } 

    const changePasswordForm = (event) => {
        event.preventDefault();
        if (!passwordMatch(event.target["passNew"].value, event.target["passNew2"].value)) {
            alert("Password Mismatch");
            return;
        }
        let users = JSON.parse(localStorage.getItem("users"));
        if(users){
            users.forEach(element => {
                if (element.email === currUser.email) {
                    if (element.pass === event.target["passOld"].value) {
                        element["pass"] = event.target["passNew"].value;
                        localStorage.setItem("users", JSON.stringify(users));
                        logout();
                    }
                }
            });
        }
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
                                        <h1>CHANGE PASSWORD</h1>
                                    </div>

                                    <form onSubmit={changePasswordForm}>
                                        <input type="password" id="passOld" name="passOld" placeholder="Old Password" required />
                                        <input type="password" id="passNew" name="passNew" placeholder="New Password" required />
                                        <input type="password" id="passNew2" name="passNew2" placeholder="Confirm New Password" required />

                                        <ThemeButton type="submit" >CHANGE PASSWORD</ThemeButton>
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

export default Password;