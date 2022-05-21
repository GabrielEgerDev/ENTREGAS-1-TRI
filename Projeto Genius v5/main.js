const divPontuacao = document.querySelector("div.pontuacao")
const divMain = document.querySelector("main")
const divs = Array.from(divMain.querySelectorAll("div"))

const botoes1 = document.querySelector(".botoes-1")
const botoes2 = document.querySelector(".botoes-2")

const failStatus = document.querySelector("#fail-status")

const startCount = document.querySelector("#start-count")

// const rnd = Math.round(Math.random() * 3)
// divs[rnd].classList.add("animate")

let sequencia = []
let animatingColors = false
let currentColorPosition = 0

divMain.addEventListener("click", (ev) => {
    if(animatingColors) {
        console.log("Espere a animação terminar.")
        return
    }

    const idxClickedElement = divs.indexOf(ev.target)

    if(idxClickedElement !== sequencia[currentColorPosition]) {

        //Remove a classe "remove" na div com o status de perda
        failStatus.classList.remove("remove")
        
        //Adiciona a classe "remove" na div com o botão de "Parar"
        botoes2.classList.add("remove")

        //Remove a classe "remove" na div com o botão 'Play'
        botoes1.classList.remove("remove")

        return
    }

    currentColorPosition++
    ev.target.classList.add("animate")

    if (currentColorPosition >= sequencia.length) {
        currentColorPosition = 0;
        setTimeout(() => turno(), 3000)
    }
})

divs.forEach(div => {
    div.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })
})

/*

function acao() {
    const rnd = Math.round(Math.random() * 3)
    divs[rnd].classList.add("animate")
    sequencia.push(rnd)
}

function executaGenius(divAtual) {

    divAtual.classList.add("animate")
    
    divAtual.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })

}

function turno() {

    // sequencia.forEach(num => {
    //     divs[num].classList.add("animate")
    // })

    let interval = 1000;

    if(sequencia.length == 0) {
        //Executa a primeira vez
        setTimeout(acao, interval)
    } else {
        //Executa a lista anterior
        for(x = 0; x <= sequencia.length; x++) {
            divAtual = divs[sequencia[x]]
            setTimeout(executaGenius(divAtual), interval)
        }
        
        //Executa mais uma vez
        setTimeout(acao, interval)
    }

}

*/

function playColorAnimation() {
    sequencia.forEach((current, index) => {
        setTimeout(() => {
            divs[current].classList.add("animate")
            animatingColors = index < sequencia.length -1
        }, 1000 * index)
    })
}

function inicio() {

    //Adiciona a classe "remove" na div com o status de perda
    failStatus.classList.add("remove")

    //Adiciona a classe "remove" na div com o botao 'Play'
    botoes1.classList.add("remove")

    let cnt = 3
    sequencia = []
    currentColorPosition = 0
    let idx = setInterval(() => {

        //Remove a classe "remove" na div com o contador
        startCount.classList.remove("remove")

        startCount.textContent = cnt--
        if(cnt == -1) {
            turno()
            clearInterval(idx)

            //Adiciona a classe "remove" na div com o contador
            startCount.classList.add("remove")

        }

    }, 1000)

    //Remove a classe "remove" na div com o botão de "Parar"
    botoes2.classList.remove("remove")

}

function parar() {
    
    currentColorPosition = 0;
    sequencia = []

    //Adiciona a classe "remove" na div com o botão de "Parar"
    botoes2.classList.add("remove")

    //Remove a classe "remove" na div com o botão 'Play'
    botoes1.classList.remove("remove")

    return 
}

function reiniciar() {
    inicio()
}

function turno() {
    divPontuacao.innerHTML = sequencia.length;
    const rnd = Math.round(Math.random() * 3)
    sequencia.push(rnd)
    playColorAnimation()
}