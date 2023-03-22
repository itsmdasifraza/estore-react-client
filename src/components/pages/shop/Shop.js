import React, { useEffect, useState } from 'react'
import "./Shop.css";
import { useDispatch, useSelector } from "react-redux";
import filterByCategory from '../../../filters/filterByCategory';
import filterByRating from '../../../filters/filterByRating';
import filterByText from '../../../filters/filterByText';
import { useNavigate } from 'react-router';

const Product = (props)=>{
    let navigate = useNavigate();
    return (
        <>
        <div className="col-md-3 col-sm-4 pb-3">
            <div onClick={()=>{navigate(`/shop/${props.id}`);}} style={{border:"1px solid grey",overflow:"hidden" }} >
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
                <button className="btn btn-block btn-dark" style={{width:"100%",borderRadius:0}}   id="addBtn">Add to Cart</button>
            </div>
        </div>
    </>
    );
}

const Shop = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const [categoryStatus, setCategoryStatus] = useState("all");
    const [rate, setRate] = useState(0);
    const [searchText, setSearchText] = useState("");


    

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    let startFiltering = () => {
        let fc = filterByCategory(categoryStatus, products);
        let fr = filterByRating(rate, fc);
        let ft = filterByText(searchText, fr);
        setFilteredProducts(ft);
    }
    useEffect(() => {
        startFiltering();
    }, [rate, categoryStatus, searchText]);

    return (
        <>
            <main>
                <aside>
                    <section>
                        <title>Rating</title>
                        <input onChange={(e)=>{setRate(parseInt(e.target.value));}}
                            type="range"
                            id="range"
                            min="0"
                            max="5"
                            value={rate}
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
                                <input id="0-25"  value="0-25" type="checkbox" name="prange" />
                                <label htmlFor="0-25">$0 to $25</label>
                            </li>
                            <li>
                                <input id="25-50"  value="25-50" type="checkbox" name="prange" />
                                <label htmlFor="25-50">$25 to $50</label>
                            </li>
                            <li>
                                <input id="50-100"  value="50-100" type="checkbox" name="prange" />
                                <label htmlFor="50-100">$50 to $100</label>
                            </li>
                            <li>
                                <input id="100on"  value="100on" type="checkbox" name="prange" />
                                <label htmlFor="100on">$100 onwards</label>
                            </li>
                        </ul>
                    </section>
                </aside>
                <main-content>

                    <input type="text" onChange={(e)=>{ setSearchText(e.target.value)}} value= {searchText} placeholder="Search" id="search" />

                    <div className="filters">
                        <div id="all" onClick={()=>{setCategoryStatus("all"); }} className="filter active">All</div>
                        <div id="mens" onClick={()=>{setCategoryStatus("men's clothing"); }} className="filter">Mens</div>
                        <div id="womens" onClick={()=>{setCategoryStatus("women's clothing"); }} className="filter">Womens</div>
                        <div id="jewellery" onClick={()=>{setCategoryStatus("jewelery"); }} className="filter">Jewellery</div>
                        <div id="electronics" onClick={()=>{setCategoryStatus("electronics"); }} className="filter">Electronics</div>
                    </div>
                    <section className={{zIndex: "-1 important"}} id="product-items">
                        <div className="row">
                            {filteredProducts.map((element) => {
                                
                                return(<Product  
                                    key = {element.id}
                                    id= {element.id}
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