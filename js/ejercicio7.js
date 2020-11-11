 document.write("<br><h5>7) Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).</h5>");
let num = parseInt(prompt("introduzca un numero del 1 al 50"))
if(num>1&&num<=50){
for(let dec=num; dec>=1; dec--){
       for(rep=dec; rep>=1; rep--){
           document.write(dec)
       }document.write("<br>")
   }
}else{
    document.write("el numero es mayor a 50")
}

