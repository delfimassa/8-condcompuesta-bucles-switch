document.write("<br><h5>2) Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota: 0-2:Muy deficiente. 3-4:Insuficiente. 5-6:Suficiente. 7:Bien. 8-9:Notable. 10:Sobresaliente. Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de número erróneo. Si el numero ingresado no es válido mostrar el mensaje Introduce un número válido</h5><br>")

    let nota = parseInt(prompt("Seleccione un numero: 0-2:Muy deficiente. 3-4:Insuficiente. 5-6:Suficiente. 7:Bien. 8-9:Notable. 10:Sobresaliente"));
    if (Number(nota) == nota) {
        //SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
        if (nota > 0 && nota <= 10) {
            if (nota < 3) {
                alert("Muy deficiente");
            }
            else if (nota < 5) {
                alert("Insuficiete");
            }
            else if (nota < 6) {
                alert("Suficiente");
            }
            else if (nota < 7) {
                alert("Bien");
            }
            else if (nota < 9) {
                alert("Notable"); 5
            }
            else if (nota >= 9) {
                alert("Sobresaliente");
            }
        }
        //SI LA NOTA NO ES ENTRE 0 Y 10
        else {
            alert("número erróneo");
        }
    } else {
        alert("Introduce un número válido");
    }


