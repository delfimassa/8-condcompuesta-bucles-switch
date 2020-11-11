document.write("<br><h5>8) Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) <br>1<br>12<br>123<br>1234<br>12345<br>123456</h5>");

let num = parseInt(prompt("introduzca un numero del 1 al 50"));
let inc = num
let rep = inc
if(num>1&&num<=50){
    for(inc=1; inc<=num; inc++){
       for(rep=1; rep<=inc; rep++) {
           document.write(rep)
       }document.write("<br>")
    }  
    }else{
        document.write("el numero es mayor a 50")
    }
