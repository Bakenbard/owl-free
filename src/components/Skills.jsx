import React from "react";
import "./ComponentStyle/AboutStyle.css";
import "./ComponentStyle/SkillsStyles.css";
import leather from "./img/leather.jpg";
import needle from "./img/needle.jpg";
import pin from "./img/pin.jpg";

function Skills () {
    return <div className="container-fluid bg">
        <div className="about skills">
            <div className="row">
                <div className="col-4 skill1">
                    <img src={leather} alt=""/>
                    <p>лучшие материалы<br/>самые-самые</p>

                </div>
                <div className="col-4 skill2">
                    <img src={pin} alt=""/>
                    <p>отменная фурнитура<br/>фыр-фыр</p>

                </div>
                <div className="col-4 skill3">
                    <img src={needle} alt=""/>
                    <p>качественные швы<br/>очень-очень</p>

                </div>
            </div>
        </div>
    </div>
}

export default Skills;