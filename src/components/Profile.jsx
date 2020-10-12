import React from "react";

const Profile = (props)=>{
    let user = props.getUser();
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