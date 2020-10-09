import React from "react";
import Carousel from "./Carousel";
import ItemDescription from "./Itemdescription";

function SingleItem () {
    return <div className="row">
            <Carousel />
            <ItemDescription />
    </div>
}

export default SingleItem;