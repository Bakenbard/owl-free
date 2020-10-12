import React from "react";
import Sidebar from "./Sidebar";
import Owl from "./Owl";
import "./ComponentStyle/HomeStyle.css";
import {NavLink} from "react-router-dom";
import "./ComponentStyle/ItemCardStyle.css";
import "./ComponentStyle/LinkStyle.css";
import Card from "./ItemCard";
import Mailing from "./Mailing";
import Block from "./BlockHor";
import Skills from "./Skills";





class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cardItems: []}
    }
    componentDidMount() {
        this.props.getItems().then(
            items=> {
                let itemsCount = items.length;
                let cardItems = [];
                for (let i = 0; i < itemsCount; i++) {
                    cardItems.push(<Card
                        key={i}
                        title={items[i].name}
                        price={items[i].price}
                        img={items[i].img}
                        />)
                }
                this.setState({cardItems: cardItems})
            }
        )
    }


    render() {
        return <div>
            <div className="row" id="">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10 home">
                    <div className="container-fluid">
                        <Owl/>
                        <div className="row">
                            {this.state.cardItems}
                        </div>
                        <Skills />
                        <Block />

                    </div>
                </div>
            </div>
        </div>
    }
}
export default Home;