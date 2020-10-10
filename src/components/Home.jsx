import React from "react";


function Home () {
    return <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Название карточки</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                    <navLink href="#" className="btn btn-primary">Переход куда-нибудь</navLink>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
}

export default Home;