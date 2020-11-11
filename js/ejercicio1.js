document.write("<br><h5>1) Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.</h5><br>");
let edad = parseInt(prompt("Ingrese su edad aqui"));

if (edad >= 18) {
    document.write("Respuesta: Felicidades, ya tienes edad de conducir");
} else {
    document.write("<br>Respuesta: Lo sentimos, todavia no tienes edad de conducir :(")
}