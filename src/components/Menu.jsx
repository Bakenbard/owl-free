import React from "react";
import {BrowserRouter, NavLink, Route} from "react-router-dom";

const Menu  = ()=> {
    return (
        <BrowserRouter>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/home">Главная</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contactUs">Контакты</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/fitting">Записаться на примерку</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/lk">Личный кабинет</a>
                </li>
            </ul>
        </BrowserRouter>

    )
}
export default Menu;

