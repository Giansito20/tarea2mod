let usuario = 'administrador';
let password = '1234';

let usuarioIngresado = prompt("Ingrese su usuario");
let passwordIngresada = prompt("Ingrese su contraseña");

if (usuario != usuarioIngresado && passwordIngresada != password){
    alert("El usuario y/o contraseña son incorrectos");
}else{
    alert("Bienvenido");
}


let num1 = prompt("Ingrese el numero 1");

let num2 = prompt("Ingrese el numero 2");

let num3 = prompt("Ingrese el numero 3");

console.log("Los numeros ingresados son: " + num1,num2,num3);

/* mayor = Math.max(num1,num2,num3);

console.log("El numero mayor es: " + mayor);

menor = Math.min(num1,num2,num3);

console.log("El numero menor es: " + menor);
*/


if(num1 > num2 && num1 > num3 ){
    console.log("El numero mayor es: " + num1)
}
if(num2 > num1 && num2 > num3){
    console.log("El numero mayor es: " + num2)
}
if(num3 > num1 && num3 > num2){
    console.log("El numero mayor es: " + num3)
}
    
if(num1 < num2 && num1 < num3 ){
    console.log("El numero menor es: " + num1)
}
if(num2 < num1 && num2 < num3){
    console.log("El numero menor es: " + num2)
}
if(num3 < num1 && num3 < num2){
    console.log("El numero menor es: " + num3)
}

mensaje = "Hola Mundo";

