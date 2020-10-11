import React from "react";
import Sidebar from "./Sidebar";
import Owl from "./Owl";
import About from "./About";
import Card from "./ItemCard";
import styles from "./styles";
import "./ComponentStyle/HomeStyle.css";




const Home = ()=>{

    return <div className="container-fluid">
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
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
         </div>
}

export default Home;