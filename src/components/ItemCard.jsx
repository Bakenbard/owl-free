import React from "react";
import {NavLink} from "react-router-dom";
import "./ComponentStyle/ItemCardStyle.css";
import "./ComponentStyle/LinkStyle.css";


const Card = (props)=>{
    return (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
            <NavLink to="/item" className="link">
                <div className="card itemCard">
                    <img src={"images/"+props.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p>description</p>
                        <p className="card-text">{props.price}₽</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Card;