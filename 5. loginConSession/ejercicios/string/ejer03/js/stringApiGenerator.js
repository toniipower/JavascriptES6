const boton = document.getElementById('generate');
const introducePalabra = document.getElementById('introducePalabra');
boton.addEventListener('click', obtenerSignificado);

// Función asíncrona para obtener una cita
async function obtenerSignificado() {
    // Mostrar un mensaje mientras se carga la palabra
    let palabra = introducePalabra.value; // Aquí puedes cambiar la palabra que desees consultar
  
    try {
      // Realizar la solicitud a la API
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${palabra}`);
  
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      // Convertir la respuesta a JSON
      const data = await response.json();

       
      // Mostrar la palabra y la definición en la página
      cadena.value = `Definición: ${data[0].meanings[0].definitions[1].definition}`;
      
      console.log(data); // Para ver todos los datos en la consola
    } catch (error) {
      // Manejar errores
      cadena.value = `No se encuentra la palabra ${palabra}`;
      console.error(error);
    }
  }