var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var resultado = document.querySelector('span')

function somar(){
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
}

function subtrair(){
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}

function multiplicar(){
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}

function dividir(){
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
}