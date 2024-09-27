/*Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 
12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.*/

let idade = parseInt(9000);

let anos = idade /365;
idade = idade % 365;
		
let meses = idade / 30;
idade = idade % 30;
		
let dias = idade;

console.log(Math.floor(anos)+ " ano(s)");
console.log(Math.floor(meses)+ " mes(es)");
console.log(Math.floor(dias)+ " dia(s)");



    