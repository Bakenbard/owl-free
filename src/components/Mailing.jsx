import React from "react";
import "./ComponentStyle/MailingStyle.css";

const Mailing = ()=> {
    return(<div className="container-fluid mailing">
            <form className="form-inline form">
                <input className="form-control mr-sm-2 field" type="email" placeholder="Email" aria-label="Подписка"/>
                <button className="btn btn-outline-success my-2 my-sm-0 button" type="submit">Подписаться</button>
            </form>
        </div>

    )
}

export default Mailing;