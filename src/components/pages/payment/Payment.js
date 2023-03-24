import React, { useEffect, useState } from 'react'
import environment from "../../../environments/environment.js";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';

const Payment = () => {
  let {amount} = useParams();
    document.title = `Payment | ${environment.app.name}`;
    const [load, setLoad] = useState(true);
    useEffect(()=>{
      function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
      async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
          if(res){
            setLoad(false);
          }
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        var options = {
          key: environment.payment.key, // Enter the Key ID generated from the Dashboard
          amount: amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: `${environment.app.name} Checkout`,
          description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          theme: {
            color: "#000",
          },
          image:
            "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
}
displayRazorpay();
    },[amount]);
  return (
    <div className="container pt-5">
      <div className="row pt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          {load ?<Box sx={{ width: '100%' }}>
      <LinearProgress />
      <br/><br/>
      <h6 className='text-center'>Loading...</h6>
    </Box>  : <></>}
        
        </div>
        <div className="col-md-4"></div>
      </div>
        
    </div>
  )
}

export default Payment;