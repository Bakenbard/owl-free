import React from "react";
import Menu from "./Menu";
import Auth from "./Auth";

const Navigation = ()=>{
    return (<div className="container-fluid">

                    <div className="row">
                        <div className="col-8">
                            <Menu />
                        </div>
                        <div className="col-4">
                           <Auth />
                           <span>ЛК</span>
                        </div>
                    </div>

        </div>
    );
}

export default Navigation;