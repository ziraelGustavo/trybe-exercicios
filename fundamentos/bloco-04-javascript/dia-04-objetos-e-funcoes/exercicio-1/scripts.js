// player = {
//     name: "Marta",
//     lastName: "Silva",
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     },
// }

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

// console.log("A jogadora " + player.name + " " + player.lastName + " " + "tem " + player.age + " " + "anos de idade.")

// console.log("A jogadora " + player.name + " " + player.lastName + " " + "foi eleita a melhor jogadora do mundo por " + player.bestInTheWorld.length + " " + "vezes.")

// console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   };

// for (let nome in names) {
//     console.log("Olá, " + names[nome])
// }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

// for (let nome in car) {
//     console.log(nome, car[nome])
// }

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// for (let properties in info) {
//   if (
//     properties === 'recorrente' &&
//     info[properties] === 'Sim' &&
//     info2[properties] === 'Sim'
//   ) {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[properties] + ' e ' + info2[properties]);
//   }
// }

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"')