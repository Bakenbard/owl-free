import React from "react";
import {NavLink} from "react-router-dom";

const Card = ()=>{
    return <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <p className="card-text">Some quick example text to build on the card title and make
                            up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Переход куда-нибудь</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Card;