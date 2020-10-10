import React from "react";
import Sidebar from "./Sidebar";
import Owl from "./Owl";
import About from "./About";
import Card from "./ItemCard";



const Home = ()=>{

    return <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <Sidebar />
                </div>
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