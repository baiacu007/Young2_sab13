const cuadradro = document.querySelector('div.quadrado')

let contagem = 1

cuadradro.addEventListener('click', expandir)
cuadradro.addEventListener('contextmenu', (implodir) => { 
    implodir.preventDefault()
    cuadradro.classList.remove('expandir')
} )

function expandir() {
    cuadradro.classList.add('expandir')
    contagem++
    cuadradro.textContent = contagem
    if(contagem > 9){
        cuadradro.classList.remove('expandir')
        contagem = -1
    }
}

