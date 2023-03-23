import React from 'react'
import "./Register.css";
import environment from "../../../environments/environment.js";
import { useNavigate } from 'react-router-dom';


const Register = () => {
  let navigate = useNavigate();
  document.title = `Register | ${environment.app.name}`;

  const passwordMatch = (pass1, pass2) => {
    if (pass1 === pass2) return true;
    return false;
  }

  const registerForm = (event) => {
    event.preventDefault();
    if (!passwordMatch(event.target["pass"].value, event.target["pass2"].value)) {
      alert("Password Mismatch");
      return;
    }
    let users = localStorage.getItem("users");
    let currUser = {
      email: event.target["email"].value,
      pass: event.target["pass"].value,
      name: event.target["name"].value
    }
    if (!users) {
      users = [currUser];
    }
    else {
      users = JSON.parse(users);
      users.push(currUser);
    }
    localStorage.setItem("users", JSON.stringify(users));
    navigate(`/login`);
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
                    <h1>Register</h1>
                  </div>
                  <form id="signup-form" onSubmit={registerForm}>
                    <input type="text" id="name" name="name" aria-describedby="emailHelp"
                      placeholder="Full Name" required />
                    <input type="email" id="email" name="email" aria-describedby="emailHelp"
                      placeholder="Email" required />
                    <input type="password" id="pass" name="pass" placeholder="Password" required />
                    <input type="password" id="pass2" name="pass2" placeholder="Confirm Password" required />

                    <button type="submit">Register</button>
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
  )
}

export default Register;