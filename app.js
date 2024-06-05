// Manejo del envío del formulario

document.getElementById("loginForm").addEventListener("submit", function (event) {event.preventDefault(); // Prevenir el envío del formulario
    // Obtener los valores de los campos de entrada
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Comprobar si el email y la contraseña son correctos (Solo de prueba)
    if (email === "admin@gmail.com" && password === "root") {
      // Redirigir al usuario a la página de índice
      window.location.href = "index.html";
    } else {
      var mensajeError = document.getElementById("Alerta"); // Obtener el elemento de alerta
      // Cambia el estilo del elemento para hacerlo visible
      mensajeError.style.display = "block";
      // Desaparecer el mensaje de error después de cierto tiempo
      setTimeout(function () {mensajeError.style.display = "none";}, 3000); // 3000 milisegundos = 3 segundos
    }
  });
