formButton.addEventListener("click", login);

if (getCookie("LoggIn")) {
    // Si la cookie existe, nos lleva al main
    window.location.href = "ejercicios/main.html";
}

/* Función que hace que puedas entrar o no!
Si `validate()` es true, llamamos a `thereMyCookies` para crear la cookie */
function login() {
    // Capturamos los valores actuales del formulario
    /* usuario = userForm.value;
    pass = passForm.value; */

    // Llamamos a la función de validación
    if (validate(usuario, pass, NOMBRE_USUARIO, PASS_USUARIO, usuario.length)) {
        thereMyCookies("LoggIn", "true");
        window.location.href = "ejercicios/main.html";
    } else {
        console.log("Credenciales inválidas, no se crea la cookie.");
    }

    return usuario = userForm.value
}
