import React from "react";
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
            <a href="/login"><Button variant="contained" size="medium">Login</Button></a>
            <a href="/signup"><Button variant="contained" size="medium">Signup</Button></a>
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