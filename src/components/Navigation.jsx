import React from "react";
import {NavLink} from "react-router-dom";
import "./ComponentStyle/NavStyle.css";
import logo from "./img/logoimg.gif";
import "./ComponentStyle/LogoImgStyle.css";
import "./ComponentStyle/AuthStyle.css";


const Navigation = ()=>{
    return (        <div className="container-fluid navi">
                     <nav className="navbar navbar-expand-lg navi">

                         <NavLink className="flex-sm-fill text-sm-center nav-link link navbar-brand" to="/"><img
                             src={logo} className={logo}/></NavLink>
                         <button className="navbar-toggler" type="button" data-toggle="collapse"
                                 data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                 aria-expanded="false" aria-label="Toggle navigation">
                             <span className="navbar-toggler-icon"></span>
                         </button>

                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
                             <ul className="navbar-nav mr-auto">
                                 <li className="nav-item">
                                     <NavLink className="flex-sm-fill text-sm-center nav-link link" to="/contactUs">Контакты</NavLink>
                                 </li>
                                 <li className="nav-item">
                                     <NavLink className="flex-sm-fill text-sm-center nav-link link" to="/fitting">Записаться на примерку</NavLink>
                                 </li>
                                 <li className="nav-item">
                                     <NavLink className="flex-sm-fill text-sm-center nav-link link" to="/lk">Личный кабинет</NavLink>
                                 </li>
                             </ul>
                             <form className="form-inline my-2 my-lg-0">
                                 <input className="form-control mr-sm-2 input" type="search" placeholder="Search"
                                        aria-label="Search"/>
                                 <button className="btn btn-outline-success my-2 my-sm-0 sub" type="submit">
                                     <i className="fas fa-sign-in-alt fa-2x"></i>
                                 </button>
                             </form>
                         </div>
                     </nav>

                    <div className="row">
                        <div className="col-8">
                            <nav className="nav flex-column flex-sm-row">
                            </nav>
                        </div>
                        <div className="col-4">

                        </div>
                    </div>
                 </div>
    );
}

export default Navigation;