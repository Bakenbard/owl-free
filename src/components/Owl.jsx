import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import coat from "./img/coat.jpg";
import dress1 from "./img/dress1.jpg";
import dress2 from "./img/dress2.png";
import lady from "./img/lady.jpg";
import lady2 from "./img/lady2.png"

function Owl() {
    return <OwlCarousel
        loop
        margin={10}
        nav
        items="3"
        autoplay
    >
        <div class="item">
            <h4>Coat</h4>
            <img src={coat} alt=""/>
        </div>
        <div class="item">
            <h4>Dress</h4>
            <img src={dress1} alt=""/>
        </div>
        <div class="item">
            <h4>dress2</h4>
            <img src={dress2} alt=""/>
        </div>
        <div class="item">
            <h4>lady</h4>
            <img src={lady} alt=""/>
        </div>
        <div class="item">
            <h4>lady2</h4>
            <img src={lady2} alt=""/>
        </div>
    </OwlCarousel>
}

export default Owl;