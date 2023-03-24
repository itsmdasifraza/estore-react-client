import React from "react";
import { useNavigate } from 'react-router';
import "./Card.css";
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = (props) => {
    let navigate = useNavigate();
    return (
        <>
            <div className="col-lg-4 col-sm-6 pb-3">
                <div className="pro-card-43" onClick={() => { navigate(`/shop/${props.id}`); }} >
                    <div className=" picture-43">
                        <img src={props.image} alt="Item" width="50px" height="50px" style={{ margin: "0 auto" }} />
                    </div>
                    <div className="info-43">
                        <div className="">
                            <div className="price-43"><h6 style={{
                                textOverflow: "ellipsis",
                                // whiteSpace: "nowrap",
                                overflow: "hidden"
                            }}

                            >{props.title}</h6></div>
                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                <h6>${props.price}</h6>
                                <div ><Rating name="read-only" value={Math.round(props.rate)} readOnly /></div>
                                <FavoriteIcon size="small" color="error"  />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;