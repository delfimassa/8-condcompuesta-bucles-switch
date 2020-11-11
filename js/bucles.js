document.write("1-");
document.write("<br>2-");
document.write("<br>3-");
document.write("<br>4-");
document.write("<br>5-");

// WHILE mientras se cumple la condicion, hacer tal cosa, si no se cumple, no la hace

// while(condicion){
//     aqui va el codigo que quiero que se ejecute, sejecutara automaticamente e infinitamente 
//      mientras la condicion sea verdadera. Es por eso que bedo decirle al bucle cuando parar
//      condicion= false;
// }

let i = 0;
// si mi variable tuviera el valor 50, no se cumple la condicion entonces no se ejecuta
while (i <= 20) {
    document.write("<br>Linea - " + i);
    // i= i+1; o se puede poner ++ que tambien es incremento de uno en uno (--para decremento)
    i++;
}

// DO WHILE hacer, mientras se cumpla la condicion, por ende se ejecuta el codidigo  al  menos una vez, 
// hasta que preguta si se cumple la condicion
// do{
//     aqui va el codigo que quiero que se ejecute(notese que todavia no puse la condicion)
// }while(condicion)

let x = 1;
do {
    document.write("<br>Numero: " + x);
    x++;
} while (x <= 25)

// FOR para cada valor de a, ejecuta tal cosa, no hay mayor diferencia con el while
// for(inicializacion; condicion; incremento;)

for(let a = 30; a>=0; a=a-2){
    document.write("<br>Numeros creados con for: "+a);
}