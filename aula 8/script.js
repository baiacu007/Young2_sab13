const N1 = document.querySelector('.n1')
const N2 = document.querySelector('.n2')
const result = document.querySelector('.result')
const button = document.querySelector('button')


button.addEventListener('click', somar)

function somar(){
    soma = parseInt(N1.value) + parseInt(N1.value)
    result.value = soma
}