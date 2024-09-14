//passo 1 - indentificação
const DIV = document.querySelector('div')

//passo 2 - criar event
DIV.addEventListener('mouseenter', entrei)
DIV.addEventListener('mouseout', saiu)
DIV.addEventListener('click', clicou)
DIV.addEventListener('dblclick', clicoDuas)
DIV.addEventListener('copy',copiou)
DIV.addEventListener('cut',recortou)
DIV.addEventListener('paste',colou)

//passo 3 - criar funçao do event
function entrei(){

    DIV.innerText = 'entrou'

}
function saiu(){
    DIV.innerText = 'saiu'
}
function clicou(){
    DIV.innerText = 'oxi,ta loco?'
}
function clicoDuas(){
    DIV.innerText = 'sai fora loco'
}
function copiou(){
    DIV.innerText = 'to copiando oq imão?'
}
function recortou(){
    DIV.innerText = 'qu-'
}
function colou(){
    DIV.innerText = 'vc tirou minhas palavras?!'
}

