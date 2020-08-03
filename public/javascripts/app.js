//let mensaje = alert("Bienvenidos al sitio");
//let resultado = confirm("deseas continuar con el sitio?");
//if (resultado) {
//    document.querySelector("h2").innerHTML = "Qué alegría que quieras con tu visita por este maravilloso sitio";
//} else {
//    document.querySelector("h2").innerHTML = "Lamentamos que no quieras continuar con tu visita";
//    location.href = "http://www.google.com";
//}
//let nombre = prompt("Por favor, ingrese su nombre");
//if (nombre) {
//    document.querySelector("h1").innerHTML += nombre;
//}
//let mayor = prompt("Es mayor de edad");
//if (mayor < 18) {
//    document.querySelector("div.container-general").style = "display: none";
//    document.getElementById("accesoDenegado").style.display = "block";
//}
//let hobbie = prompt("Ingrese sus hiobbies");
//
//let arrayHobbie = hobbie.split(',');
//var hobbieComparate = hobbie.toLowerCase();
//if (hobbieComparate == "programacion" || hobbieComparate == "programar" || hobbieComparate == "programación") {
//    alert("genial");
//} else {
//
//    alert("lastima que no te guste programar");
//}
//
//let keys = ["programacion", "programación", "programar", "Programacion", "Programación", "Programar"];
//if(arrayHobbie.forEach(e => keys.find(x => x == e))){
////mensaje
//alert('no te guste programar');
//let imagen = document.getElementsByClassName('background-img').style.backgroundImage = "/img/gatito.jpg"
//}else{
////mensaje 2
//alert('genial programador!');
//}
//
//punto 09
//let listaHobbies = '<ol>';
//for (let i = 0; i < arrayHobbie.length; i++){
//    lsitaHobbies += '<li>' + arrayHobbies[i] + "</li>"
//}
//
//listaHobbies += '<ol>'
//document.querySelector(".hobbies").innerHTML += listaHobbies;


//punto 11
let colorPreferido = prompt("Ingrese su color favorito");
console.log(colorPreferido);

let NOMBRE = prompt("Ingrese su nombre");
let NOMBRE2 = "<span>" + NOMBRE + "</span>"; 
 document.querySelector("h1").innerHTML = "Bienvenido " + NOMBRE2;
let spanClass =  document.querySelector("h1 span");
//add class to span
spanClass.classList.add('colorPreferido');


//punto 12
let hobbie = prompt("Ingrese sus hobbies");
let arrayHobbie = hobbie.split(',');

let listaHobbie = '<ul>';
for (let i = 0; i < arrayHobbie.length; i++){
    listaHobbie += `<li ><a href="${prompt(`URL de ${arrayHobbie[i]}`)}">${arrayHobbie[i]}</li>`;
}
listaHobbie += '</ul>';
document.querySelector('.hobbies').innerHTML = listaHobbie;
document.querySelectorAll(".hobbies li").style.textAlign = "center";