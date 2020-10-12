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
        items="1"
        autoplay
    >
            <div className="item">
                <img src={slide1} alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>ДАВНО МЕЧТАЛА?</h3>
                    <p>Узнайте о товарах со скидками, акциях и специальных предложениях</p>
                </div>
            </div>
            <div className="item">
                <img src={slide2} alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>НОВЫЕ МОДЕЛИ В ПРОДАЖЕ</h3>
                    <p>Мы старамся регулярно расширять ассортимент - посмотрите, что появилось в продаже совсем недавно!</p>
                </div>
            </div>
            <div className="item">
                <img src={slide3} alt=""/>
                <div className="carousel-caption d-none d-md-block">
                    <h3>НАМ ИНТЕРЕСНО ВАШЕ МНЕНИЕ</h3>
                    <p>Расскажите о сделанной покупке или о том, какую модель Вы ищите</p>
                </div>
            </div>
    </OwlCarousel>
}

export default Owl;