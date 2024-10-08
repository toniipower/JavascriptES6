
function login(){

    const nombreUsuario = "anto";
    const passUsuario   = "123";
    const contenido = document.getElementById("contenido")

    let confi;
    let usuario = prompt("Hola muchacho", "ponga su nombre")
    let pass = prompt("a continuación", "indique su contaseña")
    // console.log(usuario)
    // console.log(pass)

    if (usuario == "" || pass == "") {
        alert("im sorry, say something, dont be shy")
    } else {
        if (usuario === nombreUsuario && pass === passUsuario) {
            alert("Welcome, enjoy your stay");
            contenido.style.display = "flex";
        } else {
            contenido.style.display = "none";
            alert("Error, intentelo de nuevo");
            let confi = confirm("Quieres intentarlo de nuevo??");
            if (confi == true) {
                login();
            } else {
                alert("Bye, see you again")
            }
            // contenido.innerHTML = "<p> Constraseña incorrecta </p> <br> <br> <p><a href='./index.html'>Reintentar</a></p>";
            // contenido.style.display = "flex";
        }

    }
}

login()