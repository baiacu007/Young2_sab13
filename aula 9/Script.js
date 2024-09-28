const NUMERO = document.querySelector('div span')
const VOLTAR = document.querySelector('.voltar')
const AVANCAR = document.querySelector('.avancar')
const ZERAR = document.querySelector('.zerar')

let contador = 0
var body = document.body

VOLTAR.addEventListener('click', decrescer)
AVANCAR.addEventListener('click', acrescentar)
ZERAR.addEventListener('click', zerar)

function decrescer(){
    if(contador == -9){
        contador == -9
    }
    else{
        contador--
    }
   
    atualizarVisor(contador)
}
function acrescentar(){
    if(contador == 9){
            contador == 9 
    }
    else{
        contador++
    }

    atualizarVisor(contador)
}
function zerar(){
    contador = 0
    atualizarVisor(contador)
}

function atualizarVisor(contagem){
    NUMERO.innerHTML = contagem
    if(contagem == 9 || contagem == -9){
        body.style.background = "purple"
    }
    else{
        body.style.background = "lightblue"
    }
    
}