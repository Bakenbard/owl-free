import React from "react";
import Sidebar from "./Sidebar";
import Owl from "./Owl";
import About from "./About";
import styles from "./styles";
import "./ComponentStyle/HomeStyle.css";
import {NavLink} from "react-router-dom";
import coat from "./img/coat.jpg";
import Card from "./ItemCard";



const Home = (props)=>{
    let items = props.getItems();
    let itemsCount = Object.keys(items).length;
    let cardItems = [];
    for (let i = 0; i < itemsCount; i++) {
        cardItems.push(<Card
            key={i}
             title={items[i].header}
             price={items[i].cost}
        />)
    }
    return  <div>
                <div className="row">
                    <div className="col-2">
                        <Sidebar/>
                    </div>
                    <div className="col-10 home">
                            <Owl />
                        <div className="row">
                            <About />
                        </div>
                        <div className="row">
                            {cardItems}
                        </div>
                    </div>
                </div>
         </div>

}

export default Home;