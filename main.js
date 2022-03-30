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
        <a class="start">Start</a>
        </div>
    `

    main.appendChild(container)
}

createLayout()

const blue = document.querySelector('.botao--azul')
console.log(blue)