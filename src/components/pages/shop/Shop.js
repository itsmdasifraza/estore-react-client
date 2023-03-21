import React, { useEffect, useState } from 'react'
import "./Shop.css";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../redux/actions/products.js";
import filterByCategory from '../../../filters/filterByCategory';

const Product = (props)=>{
    return (
        <>
        <div className="col-md-3 col-sm-4 pb-3">
            <div style={{border:"1px solid grey",overflow:"hidden" }} >
                <div style={{display:"flex"}} >
                    <img src={props.image} alt="Item" height="200px" style={{margin:"0 auto"}} />
                </div>
                <div className="info">
                    <div className="px-3">
                        <div className="price"><h6 style={{
                            textOverflow:"ellipsis",
                            whiteSpace:"nowrap",
                            overflow:"hidden"
                        }} 

>{props.title}</h6></div>
                        <div className="d-flex" style={{justifyContent:"space-between"}}>
                            <h6>{props.price}$</h6>
                            {/* <h6>{element.sizes[0]},{element.sizes[1]},{element.sizes[2]}</h6> */}
                        </div>
                    </div>
                    {/* <div class="d-flex px-3" >
                        <h6>Colors:</h6>
                        <div class="d-flex">
                            <div class="circle" style="background-color: ${element.colours[0]};"></div>
                            <div class="circle" style="background-color: ${element.colours[1]};"></div>
                            <div class="circle" style="background-color: ${element.colours[2]}; margin:0;"></div>
                        </div>
                    </div> */}
                    <div className="px-3 pb-3">Rating: {Math.round(props.rate)}</div>
                </div>
                <button className="btn btn-block btn-dark" style={{width:"100%",borderRadius:0}}  onClick="addToCart(this, ${element.id})" id="addBtn">Add to Cart</button>
            </div>
        </div>
    </>
    );
}

const Shop = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    let categoryStatus = "all";
    const fetchProducts = async () => {
        let res = await axios.get(`https://fakestoreapi.com/products`);
        res = await res.data;
        console.log(res);
        dispatch(setProducts(res));
        localStorage.setItem("products", JSON.stringify(res));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    let startFiltering = () => {
        setFilteredProducts(filterByCategory(categoryStatus, products));
        console.log(filteredProducts);
    }

    return (
        <>
            <main>
                <aside>
                    <section>
                        <title>Rating</title>
                        <input onChange="filterCategory()"
                            type="range"
                            id="range"
                            min="0"
                            max="5"
                            value="0"
                            list="values"
                        />
                        <datalist id="values">
                            <option value="0" label="0"></option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                            <option value="5" label="5"></option>
                        </datalist>
                    </section>
                    <section>
                        <title >Price Range</title>
                        <ul style={{ paddingLeft: 0 }} >
                            <li>
                                <input id="0-25" onClick="setRange(this.value)" value="0-25" type="checkbox" name="prange" />
                                <label for="0-25">$0 to $25</label>
                            </li>
                            <li>
                                <input id="25-50" onClick="setRange(this.value)" value="25-50" type="checkbox" name="prange" />
                                <label for="25-50">$25 to $50</label>
                            </li>
                            <li>
                                <input id="50-100" onClick="setRange(this.value)" value="50-100" type="checkbox" name="prange" />
                                <label for="50-100">$50 to $100</label>
                            </li>
                            <li>
                                <input id="100on" onClick="setRange(this.value)" value="100on" type="checkbox" name="prange" />
                                <label for="100on">$100 onwards</label>
                            </li>
                        </ul>
                    </section>
                </aside>
                <main-content>

                    <input type="text" placeholder="Search" id="search" />

                    <div className="filters">
                        <div id="all" onClick={()=>{categoryStatus = "all"; startFiltering();}} className="filter active">All</div>
                        <div id="mens" onClick={()=>{categoryStatus = "men's clothing"; startFiltering();}} className="filter">Mens</div>
                        <div id="womens" onClick={()=>{categoryStatus = "women's clothing"; startFiltering();}} className="filter">Womens</div>
                        <div id="jewellery" onClick={()=>{categoryStatus = "jewelery"; startFiltering();}} className="filter">Jewellery</div>
                        <div id="electronics" onClick={()=>{categoryStatus = "electronics"; startFiltering();}} className="filter">Electronics</div>
                    </div>
                    <section class={{zIndex: "-1 important"}} id="product-items">
                        <div className="row">
                            {filteredProducts.map((element) => {
                                
                                return(<Product  
                                    key = {element.title}
                                   image = {element.image}
                                       title = {element.title}
                                       price = {element.price}
                                       rate = {element.rating.rate}
                             />);
                                       
                            })}
                        </div>

                    </section>
                </main-content>
            </main>
        </>
    )
}

export default Shop;