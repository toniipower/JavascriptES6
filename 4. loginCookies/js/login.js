const formButton = document.getElementById("formButton");
const formContainerId = document.getElementById("formContainerId")
const menuNav = document.getElementById("menuNav")


formButton.addEventListener("click", login);
/* Función que hace que puedas loguearte logeo */
function login(){

    const nombreCookie = document.cookie

    const nombreUsuario = "antonio";
    const passUsuario   = "123";
    const containerCardId = document.getElementById("containerCardId")
    const userForm = document.getElementById("userForm")
    const passForm = document.getElementById("passForm")
    let usuario = userForm.value;
    let pass = passForm.value;
    
    validar(usuario, pass, nombreUsuario, passUsuario, usuario.length)
    if (usuario == ) {
        
    }
    
}

/* Función de validación */
function validar(nombreUser, passUser, nombreUsuario, passUsuario, userLength) {
    console.log(userLength)
    if (nombreUser == "" | passUser == "") {
        contenido.innerHTML = "<div class='card marginBot containerCard bgColor '><p class='center'> Debes introducir algo </p> <br> <br> <p class='center'><a  href='./index.html'>Reintentar</a></p></div>";
    } else {
        if (userLength <= 3 ) {
            contenido.innerHTML = "<div class='card marginBot containerCard bgColor'><p class='center'> Oye, el usurario debe tener mas de 3 caracteres! </p> <br> <br> <p class='center'><a  href='./index.html'>Reintentar</a></p></div>";
            // alert("Oye, el usurario debe tener mas de 3 caracteres!")
        } else if (nombreUser != nombreUsuario && passUser != passUsuario) {
            contenido.innerHTML = "<div class='card marginBot containerCard bgColor'><p class='center'> El usuario o la contraseña no son correctos! </p> <br> <br> <p class='center'><a  href='./index.html'>Reintentar</a></p></div>";
            // alert("El usuario o la contraseña no son correctos");
        } else if (nombreUser === nombreUsuario && passUser === passUsuario) {
            // alert("Puede pasar")
            // contenido.innerHTML ="<p class='center'> Cargando contenido...</p>"
            document.getElementById('loading').style.display = 'flex';
            setTimeout(()=>{
                document.getElementById('loading').style.display = 'none';
                menuNav.style.display = "flex"
                containerCardId.style.display = "flex";
                formContainerId.style.display = "none"
            }, 1000)
        } 
    }
}
