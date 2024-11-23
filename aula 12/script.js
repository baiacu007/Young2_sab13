const auga = document.querySelector('img')
const audo_bebeu = document.querySelector('#som-bebeu')
const audo_nice = document.querySelector('#som-nice')
const lista = document.querySelector('ul')

let tempo_intervalo 
let alerta 

audo_bebeu.loop = true

window.addEventListener('click', iniciar_arlame, {once: true})
auga.addEventListener('click', parar_arlame)

function parar_arlame(){
    audo_bebeu.pause()

    audo_bebeu.currentTime = 0
    audo_nice.currentTime = 0
    audo_nice.play()

    const tempo_agora = new Date()
    const horas = String(tempo_agora.getHours()).padStart(2, '0')
    const minutos = String(tempo_agora.getMinutes()).padStart(2, '0')
    const tempo = `${horas}:${minutos}`

    const LI_elemento = document.createElement('li')
    LI_elemento.textContent = `Bebi as ${tempo}`
    lista.appendChild(LI_elemento)

    audo = 'bebeu.mp3'
}

function dispara_arlame(){
    audo_bebeu.play()
}

function iniciar_arlame(){
    if(!tempo_intervalo){
        tempo_intervalo = setInterval(dispara_arlame, 1 * 60 * 1000 )
        alert('aoba')
    }
}

 