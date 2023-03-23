import React, { useEffect, useState } from 'react'
import environment from "../../../environments/environment.js";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from "./card/Card";
import "./Cart.css";

const Cart = () => {
    const products = useSelector((state) => state.products);
    let [totalPrice, setTotalPrice] = useState(0);
    document.title = `Cart | ${environment.app.name}`;
    const navigate = useNavigate();

    useEffect(() => {
        setTotalPrice(0);
        let calculate = () => {
            products.forEach((elem) => {
                if (elem.presentInCart === true) {
                    setTotalPrice((amount) => {
                        return amount + elem.price;
                    });
                }
            });
        }
        calculate();
    }, [products]);

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="pb-3"><b>Cart items</b></h2>
                        <div className="row" id="cart-product">
                            {products.map((elem) => {
                                if (elem.presentInCart === true) {
                                    return (<Card
                                        key={elem.id}
                                        id={elem.id}
                                        image={elem.image}
                                        title={elem.title}
                                        price={elem.price}
                                        rate={elem.rating.rate}
                                    />);
                                }
                                return (<div key={elem.id}></div>);
                            })}
                            {!totalPrice ?
                            <div className='col-12 pb-3'>
                                <div className='checkout'>
                                     <h6>Cart is empty, let's explore shop page!</h6> 
                                </div>
                            </div>
                            : <></>}

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="checkout" className="checkout">
                            {products.map((elem) => {
                                if (elem.presentInCart === true) {
                                    return (
                                        <div key={elem.id} style={{
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }}>

                                            <h6 style={{
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                width: "85%"
                                            }}>{elem.title}</h6>
                                            <h6>${Math.round(elem.price)}</h6>
                                        </div>

                                    );
                                }
                                return (<div key={elem.id}></div>);

                            })}
                            {!totalPrice ? <h6>Cart is empty, your total amount is ${totalPrice}</h6> : <></>}
                            <hr />
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <h6>Total</h6>
                                <h6>${Math.round(totalPrice)}</h6>
                            </div>
                            <hr />
                            <Button onClick={() => {
                                navigate(`/payment/${Math.round(totalPrice)}`);
                            }} variant="contained" sx={{ width: "100%", backgroundColor: "#fed700", color:"black" }} size="medium">Checkout</Button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;