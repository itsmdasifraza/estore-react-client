import React, { useEffect, useState } from 'react'
import environment from "../../../environments/environment.js";
import { useSelector } from "react-redux";
import Card from "./card/Card";
import "./Wishlist.css";

const Wishlist = () => {
    const products = useSelector((state) => state.products);
    let [wishlist, setWishlist] = useState([]);
    document.title = `Wishlist | ${environment.app.name}`;

    useEffect(() => {
        setWishlist([]);
        let calculate = () => {
            products.forEach((elem) => {
                if (elem.presentInWishlist === true) {
                    setWishlist((prev)=>{
                        let temp= [...prev, elem];
                        return temp;
                    });
                }
            });
        }
        calculate();
    }, [products]);

  return (
    <div>
        <div className='container pt-5'>
            <h2 className='pb-3 text-center' style={{fontWeight: 800}}>Wishlist</h2>
            <div className='row'>
            {wishlist.map((elem) => {
                                    return (<Card
                                        key={elem.id}
                                        id={elem.id}
                                        image={elem.image}
                                        title={elem.title}
                                        price={elem.price}
                                        rate={elem.rating.rate}
                                    />);
                                
                            })}
            {wishlist.length === 0 ? <div className="col-12"><div className='p-3 bg-white'><h6>Wishlist is empty, let's explore shop page!</h6></div></div> : <></>}
            </div>
        </div>
    </div>
  )
}

export default Wishlist;