/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/


alert("Insira dois numeros para fazermos uma operação numérica")

let firstNumber = prompt("Aqui você digita o primeiro numero")
let secondNumber = prompt("Aqui você digita o segundo numero")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)


const soma = firstNumber + secondNumber
const subtração = firstNumber - secondNumber
const multiplicação = firstNumber * secondNumber
const divisão = firstNumber / secondNumber
const restoDiv = firstNumber % secondNumber


alert ("Soma " + soma)
alert ("Subtração " + subtração)
alert ("Divisão " + divisão)
alert ("Multiplicação " + multiplicação)
alert ("restoDiv " + restoDiv)







