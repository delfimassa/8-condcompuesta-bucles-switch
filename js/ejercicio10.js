document.write("<br><h5>10) Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.</h5>");
var i,j;
let filas = parseInt(prompt("Introduce numero de filas"));
let columnas = parseInt(prompt("Introduce numero de columnas"));
let multip = filas * columnas;
document.write("<table border>");
//BUCLE DESDE 0 HASTA EL NÚMERO DE FILAS
for (i = 0; i < filas; i++) {
    //EN CADA FILA ESCRIBIMOS UN <tr> PARA COMENZAR LA FILA
    document.write("<tr>");
    //BUCLE DESDE 0 HASTA EL NÚMERO DE COLUMNAS
    for (j = 0; j < columnas; j++) {
        //COMENZAR UNA CELDA
        document.write("<td>");
        //ESCRIBIMOS EL VALOR DEL PRODUCTO
        document.write(multip);
        //DECREMENTAMOS EL PRODUCTO DE 1 EN 1 ?????????????????????
        multip--;
        //CERRAR LA CELDA
        document.write("</td>");
    }
    //CERRAMOS LA FILA
    document.write("</tr>");
}
//CERRAMOS LA TABLA
document.write("</table>");