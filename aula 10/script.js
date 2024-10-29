const  CUESTONNIES_QUIZ = [
    {
        cuestaon:'uga ugauga ugabo',
        a:'ugauga',
        b: 'ga bo',
        c: 'u',
        d: 'uga',
        correta:'c',
    },
    {
        cuestaon:'pó pô pó',
        a:'pó pô',
        b:'pó',
        c:'pòpô',
        d:'pô',
        correta:'c',
    },
    {
        cuestaon:'?',
        a:'!',
        b:'&',
        c:'$',
        d:'@',
        correta:'d',
    },
    {
        cuestaon:'Melhor zelda é',
        a:'c',
        b:'ocarina of time',
        c:'d',
        d:'b',
        correta:'b',
    }
]

const TITULO =document.querySelector("h1")
const ALT_A =document.querySelector("#texto_a")
const ALT_B =document.querySelector("#texto_b")
const ALT_C =document.querySelector("#texto_c")
const ALT_D =document.querySelector("#texto_d")
const BOTAO =document.querySelector("button")
const CARUTAO =document.querySelector(".container")
const ALTERNATIVAS = document.querySelector(".resposta")

let verificou = false
let acerto = 0
let questao_atual = 0

//passo 2
window.onload = carregar_quiz()
BOTAO.addEventListener('click', verificar)

//passo 3
function carregar_quiz()
{
    const QUESTAO = CUESTONNIES_QUIZ[questao_atual]
    ALTERNATIVAS.array.forEach(alternativa => {
        alternativa.checked = false
        document.querySelector(`label[for=${alternativa.id}]`).classList.remove("correta", 'incorreta')
    });
    TITULO.innerText = CUESTONNIES_QUIZ.cuestaon
    ALT_A.innerText = QUESTAO.a
    ALT_B.innerText = QUESTAO.b
    ALT_C.innerText = QUESTAO.c
    ALT_D.innerText = QUESTAO.d

    BOTAO.innerText = "Verificar"
    verificou = false
} 

function verificar(){
    if (verificou == false){
        verificar_resposta()
    }
    else{
        proxima_pergunta()
    }
}   

function verificar_resposta(){
    const RESPOSTA_CORRETA = CUESTONNIES_QUIZ[questao_atual].correta
    const RESPOSTA_JOGADOR = pegar_resposta()

    ALTERNATIVAS.forEach((alternativa) => {
        const label = document.querySelector(`label[for =${alternativa.id}]`)
        if(alternativa.id == RESPOSTA_CORRETA){
            label.classList.add('correta')
        }
        else{
            label.classList.add('incorreta')
        }
    })
    if(RESPOSTA_JOGADOR == RESPOSTA_CORRETA)
    {
        acerto++
    }
    BOTAO.innerText= "Proxima"
    verificou = true
}

function pegar_resposta()
{
    let resposta =undefined
    ALTERNATIVAS.forEach((alternativa) =>{
        if (alternativa.checked == true){
            resposta = alternativa.id
        }
    })
    return resposta
}
function proxima_pergunta(){
    questao_atual++
    maximo_perguntas = CUESTONNIES_QUIZ.length
    if(questao_atual < maximo_perguntas)
    {
        carregar_quiz()
    }
    else{
        CARUTAO.innerHTML = `<h1 id="questao"> Você acertou ${acerto} de ${maximo_perguntas} perguntas!</h1>`
    }
}