function createLayout(){
    const main = document.getElementById('main')

    const container = document.createElement('section')
    container.classList.add('container')

    container.innerHTML = `
        <div class="botao botao--verm"></div>
        <div class="botao botao--amarelo"></div>
        <div class="botao botao--verde"></div>
        <div class="botao botao--azul"></div>
        <div class="infoCentro">
        <h1 class="tituloJogo"> Genius </h1>
        <a onclick="inicioJogo()" class="start">Start</a>
        
        </div>
    `

    main.appendChild(container)
}

createLayout()

const verm = document.querySelector('.botao--verm')
const amarelo = document.querySelector('.botao--amarelo')
const verde = document.querySelector('.botao--verde')
const azul = document.querySelector('.botao--azul')

let ordem = []
let ordemClick = []
let score = 0
let lose = false

function ordemAleatoria () {
    let ordemCor = Math.floor(Math.random() * 4)
    ordem[ordem.length] = ordemCor
    ordemClick = []
    
    for (let i in ordem) {
        let elementoCor = criarElementoCor(ordem[i])
        corClara(ordem[i], elementoCor, Number(i) + 1)
    }
    setTimeout(()=>{
        document.querySelector('.tituloJogo').innerHTML = 'Sua vez'
    }, (ordem.length * 700))
}

function corClara (cor, element, number) {
    number = number * 700;
    setTimeout (() => {
        element.classList.add('selected')
    }, number - 450)
    setTimeout (() => {
        element.classList.remove('selected')
    }, number + 50)
}

function criarElementoCor (cor) {
    if (cor == 0){
        return verm
    } else if (cor == 1){
        return amarelo
    } else if (cor == 2){
        return verde
    } else if (cor == 3){
        return azul
    }
}

verm.onclick = () => click(0)
amarelo.onclick = () => click(1)
verde.onclick = () => click(2)
azul.onclick = () => click(3)

function click (cor) {
    ordemClick[ordemClick.length] = cor
    criarElementoCor(cor).classList.add('selected')

    setTimeout(() =>{
        criarElementoCor(cor).classList.remove('selected')
        ordemCheck()
    }, 450)
}

function ordemCheck (){
    for (let i in ordemClick) {
        if (ordemClick[i] != ordem[i]) {
            lose = true
            console.log('game over')
            perdeuJogo("Você perdeu, tente novamente!")
            break
        }
    }
    if (ordemClick.length == ordem.length && lose == false){
        score++
        console.log(score)
        pontoTela(score)
        setTimeout(() => {
            proximoNivel()
        }, 1000)
    }
}

function proximoNivel (){
    document.querySelector('.tituloJogo').innerHTML = 'Observe'
    ordemAleatoria()
}

function reiniciarJogo(){
    perdeuJogo("Você reiniciou o jogo!")
    document.querySelector('.infoCentro').innerHTML = `<h1 class="tituloJogo"> Genius </h1> <a onclick="inicioJogo()" class="start">Start</a>`
}

function inicioJogo(){
    document.querySelector('.infoCentro').innerHTML = `<h1 class="tituloJogo"> Genius </h1> <a onclick="reiniciarJogo()" class="start">Reiniciar</a>
    <p class="score">0</p>`

    score = 0
    lose = false

    setTimeout(() => {
        proximoNivel()
    }, 500)
}

function perdeuJogo(msg){
    ordem = []
    ordemClick = []
    alert(msg)
}

function pontoTela(score){
    document.querySelector('.score').innerHTML = score
}
