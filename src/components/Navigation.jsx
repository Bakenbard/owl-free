import React from "react";
import Menu from "./Menu";
import Auth from "./Auth";
import MenuStyle from "./ComponentStyle/MenuStyle";
import {NavLink} from "react-router-dom";
import LinkStyle from "./ComponentStyle/LinkStyle.css";



const Navigation = ()=>{
    return (<MenuStyle>
                 <div className="container-fluid">

                    <div className="row">
                        <div className="col-8">
                            <nav className="nav flex-column flex-sm-row">
                                <NavLink className="flex-sm-fill text-sm-center nav-link link" to="/home">Главная</NavLink>
                                <NavLink className="flex-sm-fill text-sm-center nav-link link" to="/contactUs">Контакты</NavLink>
                                <NavLink className="flex-sm-fill text-sm-center nav-link link" to="/fitting">Записаться на примерку</NavLink>
                                <NavLink className="flex-sm-fill text-sm-center nav-link link" to="/lk">Личный кабинет</NavLink>

                            </nav>
                        </div>
                        <div className="col-4">
                            <Auth />
                        </div>
                    </div>
                 </div>
        </MenuStyle>
    );
}

export default Navigation;