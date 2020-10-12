 import React from "react";
 import styled from "styled-components";
 import "./ComponentStyle/SidebarStyle.css";
 import "./ComponentStyle/LinkStyle.css";

 const Sidebar = ()=>{
     return (  <div className="container-fluid side">
                 <ul className="nav flex-column">
                     <li className="nav-item">
                         <a className="nav-link active link" href="#">Active</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link link" href="#">Link</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link link" href="#">Link</a>
                     </li>
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
                 </ul>
         </div>
        );
    }

 export default Sidebar;