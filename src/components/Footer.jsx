import React from "react";
import logo from "./img/logoimg.gif";
import leather from "./img/leather.jpg";
import pin from "./img/pin.jpg";
import needle from "./img/needle.jpg";
import "./ComponentStyle/FooterStyle.css";

const Footer = ()=> {
    return (<footer className="footer">

        <div className="footer-area footer-padding fix">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="single-footer-caption">
                            <div className="single-footer-caption">
                                <div className="footer-logo logo">

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ss">
                        <div className="instagram-gellay icons">
                            <a href="#"><img src={needle} alt=""/></a>
                            <a href="#"><img src={pin} alt=""/></a>
                            <a href="#"><img src={leather} alt=""/></a>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="single-footer-caption mb-50 mt-60">
                            <div className="footer-tittle">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom-area">
            <div className="container">
                <div className="footer-border">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-lg-4">
                            <div className="footer-copy-right">
                                <p>
                                    Сделано с любовью, Bootstrap и другими бесконечными возмоностями интернета<br/>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-footer-caption mt-60">
                                <div className="footer-tittle">
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            Напишите нам<br/>support@gruzik.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-menu f-right">
                                <ul>
                                    <li><a href="#">Про куки</a></li>
                                    <li><a href="#">Контакты</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    )
}

export default Footer;
