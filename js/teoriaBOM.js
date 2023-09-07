let contador = 1

const saludar = (texto) => {
  document.write('<br> Hola Mundo');
  if(contador === 5) {
    //quiero detener el uso de setInterval
    window.clearInterval(indentificador)
  }
  contador++
};

//saludar();

//ejecutar una función pasado un cierto tiempo

//window.setTimeout(saludar, 3000);
/* 
setTimeout(function () {
  saludar('algo');
}, 4000);

setTimeout(() => {
  document.write('<br> Hola Mundo');
}, 5000);
 */

//Cuando necesitemos ejecutar una función de manera repetida cada cierto tiempo

let indentificador = window.setInterval(saludar, 4000)
