let firstNum = prompt('Escolha o primeiro número')
let secondNum = prompt('Escolha o segundo número')

firstNum = Number(firstNum)
secondNum = Number(secondNum)

const sum = firstNum + secondNum
const sub = firstNum - secondNum
const mult = firstNum * secondNum
const div = firstNum / secondNum
const restDiv = firstNum % secondNum

alert('Somados: ' +sum)
alert('Subtraídos: ' +sub)
alert('Multiplicados: ' +mult)
alert('Divididos: ' +div)
alert('Resto da divisão: ' +restDiv)

if(restDiv % 2 == 0) {
  alert('O número é par.')
} else {
  alert('O número é impar.')
}

if(firstNum == secondNum) {
  alert('Os números são iguais.')
} else {
  alert('Os números são diferentes.')
}