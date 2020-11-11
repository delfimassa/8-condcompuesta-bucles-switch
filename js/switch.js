let dia = parseInt(prompt("Seleccione un numer: 1-lunes 2-martes 3-miercoles 4-jueves 5-viernes 0-sabado/domingo"));

// switch (condicion) {
//     case 1:
//         codigo a ejecutar si la condicion es iguak a 1;
//         break;
//     case 2:
//         codigo;
//         break;
//     case 3:
//         codigo;
//         break;
//     default:
//         codigo;    
// }

switch (dia) {
    case 1:
        document.write("El dia seleccionado es lunes");
        break;
    case 2:
        document.write("El dia seleccionado es martes");
        break;
    case 3:
        document.write("El dia seleccionado es miercoles");
        break;
    case 4:
        document.write("El dia seleccionado es jueves");
        break;
    case 5:
        document.write("El dia seleccionado es viernes");
        break;
    case 0:
        document.write("El dia seleccionado es sabado o domingo");
        break;
    default:
        document.write("la opcion ingresada no es valida")
}