import React from "react";
import "./ComponentStyle/AboutStyle.css"

function Block () {
    return <div className="container">
        <div className="about">
            <h1>ПОДПИШИСЬ НА РАССЫЛКУ</h1>
            <p>Тебе придет уведомдение о новых поступлениях и акциях</p>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <form className="form-inline form">
                        <input className="form-control mr-sm-2 field" type="email" placeholder="Email" aria-label="Подписка"/>
                        <button className="btn btn-outline-success my-2 my-sm-0 button" type="submit">Подписаться</button>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    </div>
}

export default Block;