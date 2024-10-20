// getLocalSession.js
function getLocalSession() {
    const loggInStatus = localStorage.getItem("LoggIn");

    console.log("Estado de LoggIn en localStorage:", loggInStatus);

    if (loggInStatus === "true") {
        // Si el estado es "true", redirigimos a main.html
        window.location.href = "ejercicios/main.html";
    }
}

// Llamamos automáticamente a la función al cargar el script
getLocalSession();
