import React from "react";
import { Link } from "react-router-dom"
import "./Home.css";
import landingPic from '../../../assets/home-landing-page.png';
import environment from "../../../environments/environment.js";
import ThemeButton from "../../buttons/ThemeButton";

const Home = () => {
  document.title = `${environment.app.name} | ${environment.app.description}`;

    return (
        <>
        <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-5">
            <h1 className="pt-3 pb-2 heading">{environment.app.name}</h1>
            <p>{environment.app.description}</p>
            <Link to="/login" className="first-button"><ThemeButton  variant="contained" size="medium">Login</ThemeButton></Link>
            <Link to="/register"><ThemeButton variant="contained" size="medium">Register</ThemeButton></Link>
            <br/>
            
          </div>
          <div className="col-md-6 pt-5">
          <div style={{display:"flex", flexStart:"end"}}>
              <img src={landingPic} width="100%" style={{marginRight: 0, marginLeft: "auto"}} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}
  
export default Home;