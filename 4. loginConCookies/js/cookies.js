//Función que setea la cookie, entran por parametros dos valores String que se envían desde login.js y son usados para crear la cookie.
function thereMyCookies(nombre, valor) {
    console.log(`${nombre}  ${valor} <<<<<<<<<<<<<<<<<<<<<<<<<<<`);
    
    let fechaExpiracion = new Date();

    fechaExpiracion.setTime(fechaExpiracion.getTime() + (1 * 60 * 1000)); // 1 minuto = 60 * 1000 milisegundos

    document.cookie =`${encodeURIComponent(nombre)}=${encodeURIComponent(valor)}; expires=${fechaExpiracion.toUTCString()}; path=/; SameSite=Strict; Secure;`;
    console.log(document.cookie); // muestro la creación

}