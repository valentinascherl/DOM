//window.alert("Hola como estan?");
let seguimos = confirm("VEmos los gastos?");
if(!seguimos){
    alert("Gracias por haber venido");
    location.href = "https://www.netflix.com";
}else{
    let miembros;
    do{
        miembros = prompt("Cuantos integrantes tiene tu familia?")
        console.log(isNaN(miembros));
    }while(isNaN(miembros) || miembros < 3); //mientras que sea un numero y sea menor a 3

    let familiaGastos = [];
    for(i=0; i < miembros; i++){
        let unNombre = prompt("Ingrese nombre");
        let unGastos = prompt("Ingrese gastos");

        //suponer que esta todo ok
        let gastos = {
            nombre: unNombre,
            gastos: unGastos
        }
        familiaGastos.push(gastos);
    }
    console.log(familiaGastos);
}