import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";

function Owl() {
    return <OwlCarousel
        loop
        margin={10}
        nav
        items="1"
        autoplay
    >
            <div className="item">
                <h4>...</h4>
                <img src={slide1} alt=""/>
            </div>
            <div className="item">
                <h4>...</h4>
                <img src={slide2} alt=""/>
            </div>
            <div className="item">
                <h4>...</h4>
                <img src={slide3} alt=""/>
            </div>
    </OwlCarousel>
}

export default Owl;