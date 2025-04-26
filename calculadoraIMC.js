//Entrada de Dados
function calcularIMC(){

let valorPeso = document.getElementById("peso").value;
let valorAltura = document.getElementById("altura") .value;

//processamento
let valorIMC = valorPeso / (valorAltura*valorAltura);    
//saida
document.getElementById(" Valor do IMC:").textContent = " Valor do IMC: " +  valorIMC.toFixed(2);
}

