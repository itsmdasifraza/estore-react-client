import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { addToCartProduct, removeFromCartProduct } from '../../../redux/actions/productsAction'
const Product = () => {
    const products = useSelector((state) => state.products);
    // const navigate = useNavigate();
    const [product, setProduct] = useState({});
    let {id} = useParams();
    const dispatch = useDispatch();
    id = parseInt(id);

    
    useEffect(()=>{
        const extractFromProducts = () =>{
            products.forEach(elem => {
                if(elem.id === id){
                    setProduct(elem);
                }
            });
        } 
        extractFromProducts();
    },[products, id]);
    


    return(<div>
        <div  className="container pt-5">
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <img src={product.image} alt={product.title} width="100%" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div>
                        <h1>{product.title}</h1>
                        <h2>{product.category}</h2>
                        {/* <h5>{product.rating.rate}</h5> */}
                        <p>{product.description}</p>
                        { !product.presentInCart 
                            ? 
                            <Button onClick={()=>{dispatch(addToCartProduct(product.id)); 
                                setProduct({...product,presentInCart: true});
                            }} variant="contained" size="medium">Add to Cart</Button>
                        : 
                           <Button onClick={()=>{dispatch(removeFromCartProduct(product.id)); 
                             setProduct({...product,presentInCart: false});
                            }} variant="contained" size="medium">Remove from Cart</Button>
                         
                        }
                        <br/><br/>
                         <Link to="/cart"><Button  variant="contained" size="medium">Manage cart</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Product;