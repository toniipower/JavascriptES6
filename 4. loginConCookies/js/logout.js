/* Cuando pulsamos el boton de logout, llamamos a delete y le pasamos el token una vez hecho, redireccionamos */
document.getElementById("logout").addEventListener("click", function() {
    // console.log(usuario);
    alert("Atención, estás saliendo......");
    
    deleteCookie("LoggIn");
    window.location.href = "../index.html";
    
});