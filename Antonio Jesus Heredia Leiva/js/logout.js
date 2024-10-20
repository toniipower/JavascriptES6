// logout.js
document.getElementById("logout").addEventListener("click", function() {
    deleteLocalStorage();
    window.location.href = "../index.html";  // Redirige a index.html
});
