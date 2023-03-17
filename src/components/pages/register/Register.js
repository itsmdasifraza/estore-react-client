import React from 'react'
import "./Register.css";



const Register = () => {
    
    (()=>{
        if(localStorage.getItem("currentUser")){
            window.location.href = "/shop";    
        }
    })();

    const  passwordMatch = (pass1, pass2) => {
        if(pass1 === pass2) return true;
        return false;
    }

    const registerForm = (event) => {
        event.preventDefault();
        if(!passwordMatch(event.target["pass"].value, event.target["pass2"].value)){
            alert("Password Mismatch");
            return;
        }
        let users = localStorage.getItem("users");
        let currUser = {
            email: event.target["email"].value, 
            pass: event.target["pass"].value,
            name: event.target["name"].value
        }
        if(!users){
            users = [currUser];
        }
        else{
            users = JSON.parse(users);
            users.push(currUser);
        }
        localStorage.setItem("users", JSON.stringify(users));
        // browserHistory.push("/login");
        window.location.href = "/login";
    }
    
  return (
    <>
        <section>
    <div className="container-fluid pt-4">
      <h1>Register</h1>
      <form id="signup-form" onSubmit={registerForm}>
        <div className="form-group pb-3">
          <input type="text" className="form-control" id="name" name ="name"  aria-describedby="emailHelp"
            placeholder="Full Name" required />
        </div>
        <div className="form-group pb-3">
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"
            placeholder="Email" required />
        </div>
        <div className="form-group pb-3">
          <input type="password" className="form-control" id="pass" name="pass" placeholder="Password" required />
        </div>
        <div className="form-group pb-3">
          <input type="password" className="form-control" id="pass2" name="pass2" placeholder="Confirm Password" required />
        </div>
        <button type="submit" className="btn btn-dark">Register</button>
      </form>
    </div>
    
  </section>
    </>
  )
}

export default Register;