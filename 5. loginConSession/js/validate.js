/* Función de validación, donde se hace una comprobación en el formulario y se hace una comparación con nuestras credenciales guardadas, para ello le paso los argumentos que ha de comprobar */
function validate(nombreUser, passUser, nombreUsuario, passUsuario, userLength) {
    let validateOk = true;

    // Si los campos están vacíos
    if (nombreUser == "" || passUser == "") {
        contenido.innerHTML = "<div class='card marginBot containerCard bgColor'><p class='center'> Debes introducir algo </p><br><br><p class='center'><a href='./index.html'>Reintentar</a></p></div>";
        validateOk = false;

    // Si el nombre de usuario tiene menos de 3 caracteres
    } else if (userLength <= 3) {
        contenido.innerHTML = "<div class='card marginBot containerCard bgColor'><p class='center'> El usuario debe tener más de 3 caracteres! </p><br><br><p class='center'><a href='./index.html'>Reintentar</a></p></div>";
        validateOk = false;

    // Si las credenciales no coinciden
    } else if (nombreUser !== nombreUsuario || passUser !== passUsuario) {
        contenido.innerHTML = "<div class='card marginBot containerCard bgColor'><p class='center'> El usuario o la contraseña no son correctos! </p><br><br><p class='center'><a href='./index.html'>Reintentar</a></p></div>";
        validateOk = false;

    // Si las credenciales coinciden
    } else if (nombreUser === nombreUsuario && passUser === passUsuario) {
        validateOk = true;
    }

    return validateOk;
}
