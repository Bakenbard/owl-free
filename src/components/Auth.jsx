import React from "react";
import AuthStyle from "./ComponentStyle/AuthStyle.css";
import ButtonStyle from "./ComponentStyle/ButtonStyle.css"

const Auth = ()=> {
    return ( <div className="row">
                <div className="col-9">
                    <input type="email" name="email" id="email" className="form-control input" placeholder="Email" require />
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-outline-warning enter">
                        <i className="fas fa-sign-in-alt fa-2x"></i>
                    </button>
                </div>
            </div>


    )
}

export default Auth;