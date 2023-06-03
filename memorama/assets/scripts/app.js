const cartasArr = [
    {
        nombre: "Papas fritas",
        img: "assets/img/fries.png"
    },
    {
        nombre: "Hamburguesa",
        img: "assets/img/hamburger.png"
    },
    {
        nombre: "Hot dog",
        img: "assets/img/hotdog.png"
    },
    {
        nombre: "Helado",
        img: "assets/img/ice-cream.png"
    },
    {
        nombre: "Pizza",
        img: "assets/img/pizza.png"
    },
    {
        nombre: "Malteada",
        img: "assets/img/milkshake.png"
    },
    {
        nombre: "Papas fritas",
        img: "assets/img/fries.png"
    },
    {
        nombre: "Hamburguesa",
        img: "assets/img/hamburger.png"
    },
    {
        nombre: "Hot dog",
        img: "assets/img/hotdog.png"
    },
    {
        nombre: "Helado",
        img: "assets/img/ice-cream.png"
    },
    {
        nombre: "Pizza",
        img: "assets/img/pizza.png"
    },
    {
        nombre: "Malteada",
        img: "assets/img/milkshake.png"
    }

]

cartasArr.sort(() => 0.5 - Math.random())

const rejillaDisplay = document.querySelector("#rejilla")
let cartasElegidas = []
let cartasElegidasIds = []
const cartasGanadas = []

function crearTabla() {
    for (let i = 0; i < cartasArr.length; i++) {
        const carta = document.createElement("img");
        carta.setAttribute("src", "assets/img/blank.png");
        carta.setAttribute("data-id", i);
        carta.addEventListener("click", voltearCarta)
        rejillaDisplay.appendChild(carta)

    }
}

crearTabla();

function checkMatch() {
    const cartas = document.querySelectorAll("img")
    const opcionUnoId = cartasElegidasIds[0]
    const opcionDosId = cartasElegidasIds[1]
    const resultadoDisplay = document.querySelector("#resultado")

    console.log(cartas)
    console.log("Check for match")
    if (opcionUnoId == opcionDosId) {
        cartas[opcionUnoId].setAttribute("src", "assets/img/blank.png")
        cartas[opcionDosId].setAttribute("src", "assets/img/blank.png")

        alert("Haz hecho click en la misma imagen!")
    }

    if (cartasElegidas[0] === cartasElegidas[1]) {
        alert("Encontraste un par!")
        cartas[opcionUnoId].setAttribute("src", "assets/img/white.png")
        cartas[opcionDosId].setAttribute("src", "assets/img/white.png")
        cartas[opcionUnoId].removeEventListener("click", voltearCarta)
        cartas[opcionDosId].removeEventListener("click", voltearCarta)

        cartasGanadas.push(cartasElegidas)
    } else {
        cartas[opcionUnoId].setAttribute("src", "assets/img/blank.png")
        cartas[opcionDosId].setAttribute("src", "assets/img/blank.png")
        alert("Vuelve a intentarlo")



    }
    resultadoDisplay.textContent = cartasGanadas.length
    cartasElegidas = []
    cartasElegidasIds = []

    if (cartasGanadas.length == (cartasArr.length / 2)) {
        resultadoDisplay.innerHTML = "Felicidades! Encontraste todos los pares"
    }
}

function voltearCarta() {
    const cartaId = this.getAttribute("data-id")
    cartasElegidas.push(cartasArr[cartaId].nombre)
    cartasElegidasIds.push(cartaId)
    console.log(cartasElegidas)
    console.log(cartasElegidasIds)
    this.setAttribute("src", cartasArr[cartaId].img)
    if (cartasElegidas.length === 2) {
        setTimeout(checkMatch, 500)
    }

}

