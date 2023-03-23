import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Authorized = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
  useEffect(()=>{
    let user = localStorage.getItem("currentUser");
    user = JSON.parse(user); 
    if(!user){
        navigate('/login');
    }
  },[navigate]);  
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Authorized;