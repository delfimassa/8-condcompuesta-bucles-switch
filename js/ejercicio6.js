document.write("<br><h5>6) Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :<br>1<br>22<br>333<br>4444<br>55555<br>666666</h5>");

let rep = 0;
for(let num = 1;  num <= 30; num++){
   for(rep = 0; rep<num; rep++){
       document.write(num)
   }document.write("<br>")
}