const INPUTO = document.querySelector('#textoLista')
const LITA = document.querySelector('#lista')

const diaAtual = new Date() 
console.log(diaAtual)

function adicionar(){
    const DATA = document.querySelector('#dataTarefa')
    const prazo = DATA.value
    const [ano, mes, dia] = prazo.split('-')
    let dataConvert = new Date(ano,mes-1,dia)
    const textoLista =  INPUTO.value.trim();
    if (textoLista != '' ){
        const li = document.createElement('li')
        li.addEventListener('click', function(){
            const confirmar = window.confirm('Deseja apagar?')
            if (dataConvert < diaAtual && confirmar){
                li.remove()  
            }
        })
        li.textContent = `${textoLista} de ${dataConvert.getDate()}/${dataConvert.getMonth()+1}`
        LITA.appendChild(li)
    }
}
