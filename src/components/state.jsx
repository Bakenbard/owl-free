const user = {
    name: "Olga",
    lastname: "Vasina",
    email: "frufru@mail.ru",
    tel: "456789",
    id: "45",
    adress: "Москва 345"

}



export function getUser(){
    return user;
}

export async function getItems(){
    let response = await fetch("http://warmskin.bakenbard9.beget.tech/getItems");
    let items = await response.json();
    return items;
}