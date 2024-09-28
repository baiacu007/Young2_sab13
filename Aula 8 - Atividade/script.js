// 1º PASSO - IDENTIFICAR OS ELEMENTOS
const N1 = document.querySelector('.soma > .n1')
const N2 = document.querySelector('.soma > .n2')
const RESULTADO_so = document.querySelector('.soma > .resultado')
const SOMAR_BTN = document.querySelector('.somar')

const N3 = document.querySelector('.subtrair > .n1')
const N4 = document.querySelector('.subtrair > .n2')
const RESULTADO_su = document.querySelector('.subtrair > .resultado')
const SUB_BTN = document.querySelector('.subtrair')

const N5 = document.querySelector('.multiplicar > .n1')
const N6 = document.querySelector('.multiplicar > .n2')
const RESULTADO_MU = document.querySelector('.multiplicar > .resultado')
const MU_BTN = document.querySelector('.multiplicar')

const N7 = document.querySelector('.dividir > .n1')
const N8 = document.querySelector('.dividir > .n2')
const RESULTADO_di = document.querySelector('.dividir > .resultado')
const DI_BTN = document.querySelector('.dividir')

// 2º PASSO - CRIAR EVENTOS
SOMAR_BTN.addEventListener('click', somar)
SUB_BTN.addEventListener('click', subitra)
MU_BTN.addEventListener('click', multi)
DI_BTN.addEventListener('click', divi)


// 3º PASSO - CRIAR AS FUNÇÕES DOS EVENTOS
function somar() {
    soma = parseInt(N1.value) + parseInt(N2.value)
    RESULTADO_so.value = soma
}
function subitra() {
    sub = parseInt(N3.value) - parseInt(N4.value)
    RESULTADO_su.value = sub
}
function multi() {
    mult = parseInt(N5.value) * parseInt(N6.value) 
    RESULTADO_MU.value = mult
}

function divi() {
    if (N8.value != 0){
        divis = parseInt(N7.value) / parseInt(N8.value) 
        RESULTADO_di.value = divis
    }
    else{
        window.alert('Não existe divisão por 0')
    }
}

