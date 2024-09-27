/*Leia um valor inteiro, que é o tempo de duração em segundos de um determinado 
evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
Entrada
O arquivo de entrada contém um valor inteiro N.
Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para
 horas:minutos:segundos, conforme exemplo fornecido.*/


 let totalSegundos = parseInt(556);
 let horas = totalSegundos / 3600;
 
 totalSegundos = totalSegundos % 3600;
         
 let minutos = totalSegundos / 60;
 totalSegundos = totalSegundos % 60;
         
 let segundos = totalSegundos;
 
 console.log(Math.floor(horas)+ ":" + Math.floor(minutos) + ":" + Math.floor(segundos));