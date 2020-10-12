 import React from "react";
 import styled from "styled-components";
 import "./ComponentStyle/SidebarStyle.css";
 import "./ComponentStyle/LinkStyle.css";
 import slide3 from"./img/slide3.jpg";


 const Sidebar = ()=>{
     return (  <div className="container-fluid side">
                 <ul className="nav flex-column">


                     <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle link" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Фильтр
                         </a>
                         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                             <a className="dropdown-item" href="#">Куртки</a>
                             <a className="dropdown-item" href="#">Пальто</a>
                             <a className="dropdown-item" href="#">Дубленки</a>
                         </div>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link link" href="#">Что-нибудь</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link link" href="#">Корзина</a>
                     </li>
                     <li className="nav-item">
                            <a className="nav-link link" href="#top">Наверх</a>
                     </li>
                 </ul>
         </div>
        );
    }

 export default Sidebar;