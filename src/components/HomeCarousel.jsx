import React from "react";
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";
import "./ComponentStyle/HomeCarouselStyle.css"

const HomeCarousel = ()=> {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide homeText" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <img src={slide1} alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Привлекательные цены</h3>
                        <p>Узнайте о товарах со скидками, акциях и специальных предложениях</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide2} alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Новые модели в продаже</h3>
                        <p>Мы старамся регулярно расширять ассортимент - посмотрите, что появилось в продаже совсем недавно!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Нам интересно Ваше мнение</h3>
                        <p>Расскажите о сделанной покупке или о том, какую модель Вы ищите</p>
                    </div>
                </div>
            </div>
        </div>

        )
}
export default HomeCarousel;