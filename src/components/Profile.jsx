import React from "react";
import {getUser} from "../states";



const Profile = (props)=>{
    let user = props.function(getUser);
    return (<div>
            <h2>{user.name} {user.lastname}</h2>
            <p>{user.adress}</p>
            <p>{user.tel}</p>
            <ul>
                <li>Пока заказов не было</li>
            </ul>
        </div>
    )
}

export default Profile;