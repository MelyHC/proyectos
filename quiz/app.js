// Mandamos a llamar a los elmentos del HTML que se van a manipular
var saludarUsario = document.getElementById('bienvenida'); 
var mostrarResultados = document.getElementById('contenedorPrincipal');
var respuestasCorrectas = document.getElementById('respuestasCorrectas');
var respuestasIncorrectas= document.getElementById('respuestasIncorrectas');
var nombreUsuario = prompt("Ingresa tu nombre:");
saludarUsario.innerHTML = "😊 Bienvenid@ " + nombreUsuario + " 😊" ;
function mensaje() {
  var iniciarPartida = prompt("Ingresa el número que corresponda a tu respuesta \n ¿Quieres iniciar la partida? \n Si \n No");

  // Evaluamos las respuestas del usuario (para iniciar el juego)
  if (iniciarPartida == NO) { //CASO 1; EN EL QUE EL USUARIO NO QUIERA JUGAR//
    mostrarResultados.innerHTML =  "<h1>Gracias por visitarnos, nos vemos la próxima 😉 </h1>";
  } else {//Caso en el que SI quiera continuar con el juego
    respuestasCorrectas.innerHTML = "<h4> Preguntas correctas </h4>";
    respuestasIncorrectas.innerHTML = "<h4> Preguntas incorrectas </h4>";

    alert("Recuerda ingresar el número que corresponde a tu respuesta 😉");

    /* PRIMERA PREGUNTA */
    var primeraPregunta = parseInt(prompt("1.¿Cuál es la bebida preferida de Gonzalo? \n 1. Agua \n 2. Cerveza \n 3. Vino"));
    if (primeraPregunta == 2) { //Ejemplo de opción con NÚMERO
      respuestasCorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>Respuesta correcta:</strong> 🍺 La cerveza 🍺";
    } else {
      respuestasIncorrectas.innerHTML += "1.¿Cuál es la bebida preferida de Gonzalo? <br> <strong>La respuesta correcta era:</strong> 🍺 La cerveza 🍺";
    }
    //SEGUNDA PREGUNTA
    var segundaPregunta = prompt("2.¿Qué es lo que más le gusta hacer a Lulú? \n A. Cantar \n B. Dibujar \n C. Programar");
    if (segundaPregunta == "A") { //Ejemplo de opción con LETRA
      //respuestasCorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
      respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    } else {
      respuestasIncorrectas.innerHTML += "<br> 2.¿Qué es lo que más le gusta hacer a Lulú? <br> <strong>Respuesta correcta:</strong> 🎤 Cantar 🎤";
    }
  }
}