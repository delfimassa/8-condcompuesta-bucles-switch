
document.write("<br><h5>Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *</h5>");
let nombre1 = prompt("Ingrese el primer nombre");
let edad1 = parseInt(prompt("Ingrese su edad"));
let nombre2 = prompt("Ingrese el segundo nombre");
let edad2 = parseInt(prompt("Ingrese su edad"));
let nombre3 = prompt("Ingrese el tercer nombre");
let edad3 = parseInt(prompt("Ingrese su edad"));

 //Función max() devuelve el mayor de los argumentos pasados.
 let maximo = Math.max(edad1, edad2, edad3);

 if (maximo == edad1) {
     document.write("El mayor es: " + nombre1);
 }
 if (maximo == edad2) {
     document.write("El mayor es: " + nombre2);
 }
 if (maximo == edad3) {
     document.write("El mayor es: " + nombre3);
 }
