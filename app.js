let firstNumber = prompt('Digite um número')
let secondNumber = prompt('Digite outro número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const subtract = firstNumber - secondNumber
const multiply = firstNumber * secondNumber
const divide = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${subtract}`)
alert(`A multiplicação dos números é: ${multiply}`)
alert(`A divisão dos números é: ${divide}`)
alert(`O restante da divisão dos números é: ${restDiv}`)


// Verificando se a soma dos dois números é par (ou ímpar);
const evenNumber = sum % 2 === 0;
if (evenNumber) {
  alert("A soma é par.");
} else {
  alert("A soma é ímpar.");
}

//Verificando se os dois números inseridos são iguais (ou diferentes).
const equalNumber = firstNumber === secondNumber
if (equalNumber) {
  alert("Os números são iguais.");
} else {
  alert("Os números são diferentes.");
}