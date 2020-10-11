 import React from "react";
 import styled from "styled-components";
 import styles from "./styles";

 const Sidebar = ()=>{
     return (  <div className="col-sm-2" style={styles.Sidebar}>
                //Single Widget
                    <div className="widget catagory mb-50">
                        //Widget Title
                        <h6 className="widget-title mb-30">Catagories</h6>

                        //Catagories  -->
                        <div className="catagories-menu">
                            <ul>
                                <li className="active"><a href="#">Chairs</a></li>
                                <li><a href="#">Beds</a></li>
                                <li><a href="#">Accesories</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="widget brands mb-50">
                        <h6 className="widget-title mb-30">Brands</h6>

                        <div className="widget-desc">
                            //Single Form Check -->
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="amado"></input>
                                    <label className="form-check-label" htmlFor="amado">Amado</label>
                            </div>
                            // Single Form Check -->
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="ikea"></input>
                                    <label className="form-check-label" htmlFor="ikea">Ikea</label>
                            </div>
                        </div>
                    </div>


                    <div className="widget color mb-50">
                        <h6 className="widget-title mb-30">Color</h6>

                        <div className="widget-desc">
                            <ul className="d-flex">
                                <li><a href="#" className="color1"></a></li>
                                <li><a href="#" className="color2"></a></li>
                                <li><a href="#" className="color3"></a></li>
                                <li><a href="#" className="color4"></a></li>
                                <li><a href="#" className="color5"></a></li>
                                <li><a href="#" className="color6"></a></li>
                                <li><a href="#" className="color7"></a></li>
                                <li><a href="#" className="color8"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget price mb-50">
                        <h6 className="widget-title mb-30">Price</h6>
                        <div className="widget-desc">
                            <div className="slider-range">
                                <div className="range-price">$10 - $1000</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

 export default Sidebar;