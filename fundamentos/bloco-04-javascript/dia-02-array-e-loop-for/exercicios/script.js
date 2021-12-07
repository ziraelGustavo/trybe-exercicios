let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i])
// }

// let resultado = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     resultado += numbers[i];
// } console.log(resultado)

// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
// } 

// let media = sum / numbers.length;

// if (media >= 20) {
//     console.log("Valor maior que 20: " + media)
// } else {
//     console.log("Valor menor ou igual a 20: " + media)
// }

// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > higherNumber) {
//     higherNumber = numbers[index];
//   }
// }

// console.log(higherNumber);

// let result = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0) {
//         result += 1
//     }
// }

// if (result === 0) {
//     console.log("Nenhum número ímpar encontrado.")
// } else {
//     console.log(result)
// }

// let lowerNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < lowerNumber) {
//     lowerNumber = numbers[index];
//   }
// }

// console.log(lowerNumber);

let numeros = [];

for (let i = 1; i <= 25; i += 1) {
    numeros.push(i)
} console.log(numeros)

let result = [];

for (let div = 0; div < numeros.length; div += 1) {
    console.log(numeros[div] / 2)
}

