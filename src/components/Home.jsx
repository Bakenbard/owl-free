import React from "react";
import Sidebar from "./Sidebar";
import Owl from "./Owl";
import About from "./About";
import Card from "./ItemCard";
import styles from "./styles";



const Home = ()=>{

    return <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-xl-8, col-sm-8">
                        <div className="row">
                            <Owl />
                        </div>
                        <div className="row">
                            <About />
                        </div>
                        <div className="container">
                            <Card/>
                        </div>
                    </div>
                </div>
         </div>
}

export default Home;