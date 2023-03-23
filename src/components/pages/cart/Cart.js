import React, { useEffect, useState } from 'react'
import environment from "../../../environments/environment.js";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Product = (props) => {
    let navigate = useNavigate();
    return (
        <>
            <div className="col-md-3 col-sm-4 pb-3">
                <div onClick={() => { navigate(`/shop/${props.id}`); }} style={{ border: "1px solid grey", overflow: "hidden" }} >
                    <div style={{ display: "flex" }} >
                        <img src={props.image} alt="Item" height="200px" style={{ margin: "0 auto" }} />
                    </div>
                    <div className="info">
                        <div className="px-3">
                            <div className="price"><h6 style={{
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden"
                            }}

                            >{props.title}</h6></div>
                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                <h6>Price: {Math.round(props.price) }$</h6>
                            </div>
                        </div>
                        <div className="px-3 pb-3">Rating: {Math.round(props.rate)}</div>
                    </div>
                </div>
            </div>
        </>
    );
}


const Cart = () => {
    const products = useSelector((state) => state.products);
    let [cart, setCart] = useState([]);
    let [totalPrice, setTotalPrice] = useState(0);
    document.title = `Cart | ${environment.app.name}`;
    const navigate = useNavigate();
    useEffect(() => {
        let createCart = () => {
            let data = products.filter((elem) => {
                if (elem.presentInCart === true) {
                    return true;
                }
                return false;
            });
            setCart(data);
        }
        createCart();
    }, [products]);
    useEffect(() => {
        let calculate = () => {
            cart.forEach((elem) => {
                setTotalPrice((amount) => {
                    return amount + elem.price;
                });
            });
        }
        calculate();
    }, [cart]);
    return (
        <>
            <div className="container-fluid pt-5">
                {/* <h1 className="pt-5 pb-3">Items in your Cart</h1> */}
                <div className="row">
                    <div className="col-md-8">
                        <div className="row" id="cart-product">
                            {cart.map((element) => {
                                return (<Product
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    title={element.title}
                                    price={element.price}
                                    rate={element.rating.rate}
                                />);

                            })}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="checkout" className="p-3 bg-dark text-white">
                            {cart.map((elem, index) => {

                                return (
                                    <div key={elem.id} style={{
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}>

                                        <h6 style={{
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden"
                                        }}>{index + 1}. {elem.title}</h6>
                                        <h6>${Math.round(elem.price) }$</h6>
                                    </div>

                                );
                            })}
                            <hr />
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <h6>Total</h6>
                                <h6>{Math.round(totalPrice)}$</h6>
                            </div>
                            <hr />
                            <Button onClick={()=>{
                                navigate(`/payment/${Math.round(totalPrice) }`);
                            }}  variant="contained" size="medium">Checkout</Button>
                   
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;