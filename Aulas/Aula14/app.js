/*
    Date
    const umaHora = 60 * 60 * 1 * 1000; //UMA HORA
    const umDia = 60 * 60 * 24 * 1000; //UM DIA
    const data = new Date (ano, mes, dia, hora, minuto, segundo);
    const data2 = new Date('2024-02-08 00:00:00');

*/

const data1 = new Date();
const data2 = new Date('2024-02-08 00:00:00');

console.log(`Dia da semana: ${data1.getDay()}`); //dia da semana formato 0 - 6
console.log(`Dia: ${data1.getDate()}`); //dia do mês
console.log(`Mês: ${data1.getMonth()}`); //mês no formato 0 - 11
console.log(`Ano: ${data1.getFullYear()}`); //ano Atual
console.log(`Hora: ${data1.getHours()}`); // Hora atual
console.log(`Minuto: ${data1.getMinutes()}`); // Minuto Atual
console.log(`Segundo: ${data1.getSeconds()}`); // Segundo Atual
console.log(`Milisegundos: ${data1.getMilliseconds()}`); //Milisegundo
console.log(data1.toString()); //formatoGringo
console.log(data2); // repassado como parâmetro 
