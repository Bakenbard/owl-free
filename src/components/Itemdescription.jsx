import React from "react";

function ItemDescription () {
    return <div className="col-md-4">
        <div className="product-meta-data">
            <div className="line"></div>
            <p className="product-price">$180</p>
            <a href="product-details.html">
                <h6>White Modern Chair</h6>
            </a>
            //Avaiable -->
            <p className="avaibility"><i className="fa fa-circle"></i> In Stock</p>
        </div>

        <div className="short_overview my-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem
                mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
        </div>
    </div>
}

export default ItemDescription;