import React from "react";
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import "./Home.css";
import landingPic from '../../../assets/home-landing-page.png';
const Home = () => {
    return (
        <>
        <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="pt-3 pb-2">eStore</h1>
            <p>Your First Shop built on HTML, CSS, AND, JavaScript</p>
            <Link to="/login"><Button variant="contained" size="medium">Login</Button></Link>
            <Link to="/register"><Button variant="contained" size="medium">Register</Button></Link>
            <br/>
            <div style={{display:"flex", flexStart:"end"}}>
              <img src={landingPic} width="40%" style={{marginRight: 0, marginLeft: "auto"}} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}
  
export default Home;