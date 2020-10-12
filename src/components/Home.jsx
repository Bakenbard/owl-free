import React from "react";
import Sidebar from "./Sidebar";
import Owl from "./Owl";
import "./ComponentStyle/HomeStyle.css";
import {NavLink} from "react-router-dom";
import "./ComponentStyle/ItemCardStyle.css";
import "./ComponentStyle/LinkStyle.css";


const Card = (props)=>{
    return (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3">
            <NavLink to="/profile" className="link">
                <div className="card itemCard">
                    <img src={"images/"+props.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.price}Теперь здесь будет русскоязычный текст для проверки работ шрифтов</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

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
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10 home">
                    <Owl/>
                    <div className="row">
                        {this.state.cardItems}
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Home;