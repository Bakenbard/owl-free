import React from "react";
import coat from "./img/coat.jpg";
import dress1 from "./img/dress1.jpg";
import dress2 from "./img/dress2.png";
import lady from "./img/lady.jpg";
import lady2 from "./img/lady2.png";
import coatmin from "./img/coatmin.png";
import coatmax from "./img/coatmax.jpg";

function Carousel() {

      return  <div className="col-md-5">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={coatmin} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={coatmax} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                </div>
            </div>
}

export default Carousel;