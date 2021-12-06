//Imprimir aritmética básica

// const a = 88;
// const b = 2;

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

//Retornar o maior entre os dois números

// const a = 10
// const b = 15

// if (a > b) {
//     console.log ("'a' é maior que b")
// } else {
//     console.log ("'b' é maior que a")
// }

//Retornar o maior entre os três números

// const a = 35
// const b = 35
// const c = 30

// if (a > b && a > c) {
//     console.log("'a' é o maior entre os três")
// } else if (b > a && b > c) {
//     console.log("'b' é o maior entre os três")
// } else {
//     console.log("'c' é o maior entre os três")
// } 

//Retornar se o número é negativo, positivo ou zero

// const a = 0

// if (a < 0) {
//     console.log("O número é negativo.")
// } else if (a > 0) {
//     console.log("O número é positivo.")
// } else {
//     console.log("O número é igual à zero.")
// }

//Verificação de três ângulos de um triângulo

// let a = -200;
// let b = 75;
// let c = 75;

// let sumOfAngles = a + b + c;

// let allAnglesPositive = a > 0 && b > 0 && c > 0;

// if (allAnglesPositive) {
//     if (sumOfAngles === 180) {
//         console.log(true)
//     } else {
//         console.log(false)
//     } 
// } else {
//     console.log("Erro, ângulo inválido")
// }

// Diz qual movimentação uma peça de xadrez é capaz de fazer

// let peca = 'ROOK'

// switch (peca.toLowerCase()) {
//     case "pawn":
//         console.log("Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.");
//         break;
//     case "bishop":
//         console.log("Bishops move diagonally any number of squares. They are unable to jump over pieces.");
//         break;
//     case "king":
//         console.log("Kings move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.")
//         break;
//     case "queen":
//         console.log("Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.");
//         break;
//     case "knight":
//         console.log("Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.");
//         break;
//     case "rook":
//         console.log("Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.");
//         break;
//     default:
//         console.log("Invalid output.")
// }

// Conversor de notas de porcentagens (0 à 100) para conceitos de A até F 

// let nota = 97

// if (nota <= 0 || nota > 100) {
//     console.log("Nota inválida.")
// } else if (nota >= 90) {
//     console.log("Nota A.")
// } else if (nota >= 80) {
//     console.log("Nota B.")
// } else if (nota >= 70) {
//     console.log("Nota C.")
// } else if (nota >= 60) {
//     console.log("Nota D.")
// } else if (nota >= 50) {
//     console.log("Nota E.")
// } else {
//     console.log("Nota F.")
// }

// Defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false. USANDO APENAS UM IF.

// const a = 9
// const b = 3
// const c = 7

// let isEven = false

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//     isEven = true
// }
// console.log(isEven)

// Defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false. USANDO APENAS UM IF.

// const a = 4
// const b = 2
// const c = 2

// let isUneven = false

// if ((a % 3 === 0 || b % 3 === 0 || c % 3 === 0)) {
//     isUneven = true
// }
// console.log(isUneven)

//Calcular o lucro de uma empresa a partir de dois valores (adicionando imposto)

// const productCost = 15;
// const productSale = 50;

// if (productCost >= 0 && productSale >= 0) {
//     const totalCost = (productCost * 1.2);
//     const gains = (productSale - totalCost) * 1000;
//     console.log("O lucro da empresa foi de " + gains + " reais")
// } else {
//     console.log("Erro: Valores inválidos.")
// }

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// const bruteSalary = 3000.00

// let aliquotINSS;
// let aliquotIR;

// if (bruteSalary <= 1556.94) {
//     aliquotINSS = bruteSalary * 0.08
// } else if (bruteSalary <= 2594.92) {
//     aliquotINSS = bruteSalary * 0.09
// } else if (bruteSalary <= 5189.82) {
//     aliquotINSS = bruteSalary * 0.11
// } else {
//     aliquotINSS = bruteSalary - 570.88
// }

// const baseSalary = bruteSalary - aliquotINSS

// if (baseSalary <= 1903.98) {
//     aliquotIR = 0
// } else if (baseSalary <= 2826.65) {
//     aliquotIR = (baseSalary * 0.075) - 142.80
// } else if (baseSalary <= 3751.05) {
//     aliquotIR = (baseSalary * 0.15) - 354.80
// } else if (baseSalary <= 4664.68) {
//     aliquotIR = (baseSalary * 0.225) - 636.13
// } else {
//     aliquotIR = (baseSalary * 0.275) - 869.36
// }

// console.log("Salário: " + (baseSalary - aliquotIR))
