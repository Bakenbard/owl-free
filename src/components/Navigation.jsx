import React from "react";
import Menu from "./Menu";
import Auth from "./Auth";
import MenuStyle from "./ComponentStyle/MenuStyle";
import {BrowserRouter} from "react-router-dom";

const Navigation = ()=>{
    return (<MenuStyle>
                 <div className="container-fluid">

                    <div className="row">
                        <div className="col-8">
                            <Menu />
                        </div>
                        <div className="col-3">
                           <Auth />
                        </div>
                        <div className="col-1">
                            <a href="">
                                <i className="fas fa-sign-in-alt fa-2x"></i>
                            </a>
                        </div>
                    </div>
                 </div>
        </MenuStyle>
    );
}

export default Navigation;