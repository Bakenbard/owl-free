 import React from "react";
 import styled from "styled-components";
 import styles from "./styles";

 const Sidebar = ()=>{
     return (  <div style={styles.Sidebar}>
                 <ul className="nav flex-column">
                     <li className="nav-item">
                         <a className="nav-link active" href="#">Active</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Link</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Link</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link disabled" href="#">Disabled</a>
                     </li>
                 </ul>
         </div>
        );
    }

 export default Sidebar;