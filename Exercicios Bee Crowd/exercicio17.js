/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, 
empre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.*/

var A = parseFloat(3.0);
var B = parseFloat(4.0);
var C = parseFloat(5.2);
var PI  = 3.14159;

var TRIANGULO = (A * C)/2;
var CIRCULO = PI * C * C;
var TRAPEZIO = ((A + B) * C) / 2;
var QUADRADO = B * B;
var RETANGULO = A * B;


console.log("TRIANGULO: "+ TRIANGULO.toFixed(3));
console.log("CIRCULO: "+ CIRCULO.toFixed(3));
console.log("TRAPEZIO: "+ TRAPEZIO.toFixed(3));
console.log("QUADRADO: "+ QUADRADO.toFixed(3));
console.log("RETANGULO: "+ RETANGULO.toFixed(3));