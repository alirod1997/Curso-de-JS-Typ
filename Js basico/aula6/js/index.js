const nome = 'Alisson';
const sobrenome = 'Rodrigues Ferreira';
const idade = 27;
const peso = 85;
const altura = 1.73;
let imc = peso/ (altura * altura); 
let anoNascimento = 2024 - idade;

console.log(nome +' '+sobrenome+ ' tem '+idade+' anos, pesa '+peso+'kg.');
console.log('tem '+altura+' de altura e seu IMC é de '+ imc);
console.log(nome +' '+ sobrenome + ' nasceu em '+ anoNascimento);