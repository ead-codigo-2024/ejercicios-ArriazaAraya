document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de inmediato
  
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    // Mensaje de validación
    const messageElement = document.getElementById("message");
  
    // Validar si los campos están vacíos
    if (nombre === "" || email === "" || password === "") {
      messageElement.textContent = "Todos los campos son obligatorios.";
      messageElement.classList.remove("success");
      messageElement.classList.add("error");
      messageElement.style.display = "block";
    } else {
      // Si todo está bien, mostrar mensaje de éxito
      messageElement.textContent = "Formulario enviado correctamente.";
      messageElement.classList.remove("error");
      messageElement.classList.add("success");
      messageElement.style.display = "block";
  
      // Aquí se podría hacer una llamada al servidor para enviar los datos
      // o realizar alguna otra acción
      console.log("Formulario válido:", { nombre, email, password });
    }
  });
  