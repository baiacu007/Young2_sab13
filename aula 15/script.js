const BOTAO = document.querySelector('button') 
const INPUTO = document.querySelector('#textoLista')
const LITA = document.querySelector('#lista')
const li = document.createElement('li')

function adicionar(){
   const textoLista =  INPUTO.value.trim();
    if (textoLista != ''){
        const li = document.createElement('li')
        li.textContent = textoLista
        LITA.appendChild(li)
    }
}

let removeButton = document.createElement('button')
removeButton.textContent = '🗑️'
removeButton.style.marginLeft = '10px'
removeButton.onclick = function() { 
    li.remove()
}

function deletar(event){
    const task = Event
}