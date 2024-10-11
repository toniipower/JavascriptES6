formButton.addEventListener("click", login);
/* Comprobación para ver si existe la cookie con el token dado */
if (getCookie("LoggIn")) {
    // Si la cookie existe, nos lleva al main
    window.location.href = "ejercicios/main.html";
}

/* Función que hace que puedas entrar o no!
Si `validate()` es true, llamamos a `thereMyCookies` para crear la cookie */
function login() {

    // Llamamos a la función de validación
    if (validate(usuario, pass, NOMBRE_USUARIO, PASS_USUARIO, usuario.length)) {
        thereMyCookies("LoggIn", "true");
        window.location.href = "ejercicios/main.html";
    } else {
        console.log("Credenciales inválidas, no se crea la cookie.");
    }

    return usuario = userForm.value
}
