import * as readlineSync from 'readline-sync';

// Entrada dinâmica do nome do herói
const nomeHeroi: string = readlineSync.question("Digite o nome do herói: ");

// Entrada dinâmica do XP do herói
const xpInput: string = readlineSync.question("Digite a quantidade de XP do herói: ");
const xpHeroi: number = parseInt(xpInput);

// Validação básica de entrada
if (isNaN(xpHeroi) || xpHeroi < 0) {
  console.log("XP inválido. Informe um número válido e positivo.");
} else {
  let nivel: string = "";

  if (xpHeroi < 1000) {
    nivel = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
  } else if (xpHeroi >= 10001) {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
