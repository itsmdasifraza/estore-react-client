import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';

const Product = () => {
    const navigate = useNavigate();
    let {id} = useParams();
    id = parseInt(id);
    const products = useSelector((state) => state.products);
    // const dispatch = useDispatch();
    const addToCart = () =>{
        alert("added to cart");
    }
  return (
    <>
        {products.map((elem)=>{
            if(elem.id === id){
                return(<div key={elem.id}>
                    <div  className="container pt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <div>
                                    <img src={elem.image} alt={elem.title} width="100%" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div>
                                    <h1>{elem.title}</h1>
                                    <h2>{elem.category}</h2>
                                    <h5>Rating: {elem.rating.rate}</h5>
                                    <p>{elem.description}</p>

                                    <Button onClick={addToCart} variant="contained" size="medium">Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            }
            return(<></>);
        })}
    </>
  )
}

export default Product;