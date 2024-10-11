/* Elimino la cookie añadiendo la fecha de expiración hasta la primera fecha posible que se permite poner, para que no pueda haber resquicios */
function deleteCookie(name) {
    console.log(name);
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Strict;Secure`;
}