import React from "react";
import Carousel from "./Carousel";
import ItemDescription from "./Itemdescription";
import Price from "./Price";

function SingleItem () {
    return <div className="row">
            <Carousel />
            <ItemDescription />
            <Price />
    </div>
}

export default SingleItem;