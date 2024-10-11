/* Función que captura las cookies y me quedo con el name o nombre */
function getCookie(name) {

    let cookies = document.cookie.split(";");

    console.log(cookies);
    for (let cookie of cookies) {
        cookie = cookie.split("="); // me quedo con: [nombre?, valor?]
        console.log(cookie);
        if (decodeURIComponent(cookie[0]) == name) { // comparo nombre? con el que estoy buscando
            return decodeURIComponent(cookie[1]); // me quedo con el valor del nombre que estoy buscando
        }
    }
    
    // return false;
    
}