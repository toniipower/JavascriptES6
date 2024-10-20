// login.js
formButton.addEventListener("click", login);

function login() {
    const usuario = userForm.value;
    const pass = passForm.value;
    const userLength = usuario.length
    const nombreUsuario = NOMBRE_USUARIO;
    const passUsuario = PASS_USUARIO;
    
    if (validate(usuario, pass, nombreUsuario, passUsuario, userLength )) {
        // Llamamos a la función que setea localStorage si la validación es correcta
        setLocalStorage();
    } else {
        console.log("Credenciales inválidas, no se procede a login.");
    }
}