import React, { useEffect, useState } from 'react'
import environment from "../../../environments/environment.js";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Card from "./card/Card";
import "./Cart.css";
import ThemeButton from "../../buttons/ThemeButton";
const Cart = () => {
    const products = useSelector((state) => state.products);
    let [totalPrice, setTotalPrice] = useState(0);
    let [cart, setCart] = useState([]);
    document.title = `Cart | ${environment.app.name}`;
    const navigate = useNavigate();

    useEffect(() => {
        setTotalPrice(0);
        setCart([]);
        let calculate = () => {
            products.forEach((elem) => {
                if (elem.presentInCart === true) {
                    setTotalPrice((amount) => {
                        return amount + elem.price;
                    });
                    setCart((prev)=>{
                        let temp= [...prev, elem];
                        return temp;
                    });
                }
            });
        }
        calculate();
    }, [products]);

    return (
        <>
            <div className="container-fluid pt-5">
            <h2 className="pb-3"><b>Cart items</b></h2>
                <div className="row">
                    <div className="col-md-8">
                       
                        <div className="row" id="cart-product">
                            {cart.map((elem) => {
                                    return (<Card
                                        key={elem.id}
                                        id={elem.id}
                                        image={elem.image}
                                        title={elem.title}
                                        price={elem.price}
                                        rate={elem.rating.rate}
                                    />);
                                
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
                            {cart.map((elem) => {
                               
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
                            <ThemeButton onClick={() => {
                                navigate(`/payment/${Math.round(totalPrice)}`);
                            }} variant="contained" sx={{ width: "100%" }} size="medium">Checkout</ThemeButton>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;