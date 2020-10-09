import React from "react";
import coat from "./img/coat.jpg";
import dress1 from "./img/dress1.jpg";
import dress2 from "./img/dress2.png";
import lady from "./img/lady.jpg";
import lady2 from "./img/lady2.png";

function Carousel() {

      return  <div className="col-md-5">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={lady} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={dress2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={coat} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
            </div>
        </div>
}

export default Carousel;