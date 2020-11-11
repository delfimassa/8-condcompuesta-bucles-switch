document.write("<br><h5>9) Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :<br>1<br>2<br>3<br>4 (Múltiplo de 4)<br>5<br>————————————————————<br>6<br>7<br>8 (Múltiplo de 4)<br>9 (Múltiplo de 9)<br>10</h5>");
let num = 1;
for(num=1; num<=500; num++){
    document.write(num)
    if(num%4==0){
        document.write(" Multiplo de 4")
    }
    if(num%9==0){
        document.write(" Multiplo de 9")
    }document.write("<br>")
    if(num%5==0){
        document.write("<hr>")
    }
}
// preguntar porque declara tantas variables el ej, 
// preguntar como habria sido si en lugar de ifs hubiera querido usar fors