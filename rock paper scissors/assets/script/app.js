const eleccionComputadoraDisplay = document.getElementById("computer-choice");
const eleccionUsuarioDisplay = document.getElementById("user-choice");
const resultadoDisplay = document.getElementById("result");
const eleccionesPosibles = document.querySelectorAll("button");
let  eleccionUsuario;
let eleccionComputadora;
let resultado;

eleccionesPosibles.forEach(eP => eP.addEventListener("click", (e)=> {
    eleccionUsuario = e.target.id;
    eleccionUsuarioDisplay.innerHTML = eleccionUsuario; 
    generarEleccionComputadora();
    obtenerResultado();
}) )

function generarEleccionComputadora() {
    const numeroRandom = (Math.floor(Math.random() * 3 )+ 1 )
    console.log(numeroRandom)
    if (numeroRandom === 1){
        eleccionComputadora = "Piedra";
    }

    if (numeroRandom === 2){
        eleccionComputadora = "Papel";
    }

    if (numeroRandom === 3){
        eleccionComputadora = "Tijeras";
    }

    eleccionComputadoraDisplay.innerHTML = eleccionComputadora;

}

function obtenerResultado () {
 if (eleccionComputadora === eleccionUsuario){
    resultado = "¡Empate!"
 }
 if (eleccionComputadora ==="Tijeras" && eleccionUsuario === "Papel"){
    resultado = "¡Perdiste!"
 }
 if (eleccionComputadora ==="Tijeras" && eleccionUsuario === "Piedra"){
    resultado = "¡Ganaste!"
 }
 if (eleccionComputadora ==="Piedra" && eleccionUsuario === "Tijeras"){
    resultado = "¡Perdiste!"
 }
 if (eleccionComputadora ==="Piedra" && eleccionUsuario === "Papel"){
    resultado = "¡Ganaste!"
 }
 if (eleccionComputadora ==="Papel" && eleccionUsuario === "Piedra"){
    resultado = "¡Perdiste!"
 }
 if (eleccionComputadora ==="Papel" && eleccionUsuario === "Tijeras"){
    resultado = "¡Ganaste!"
 }
resultadoDisplay.innerHTML= resultado;

}