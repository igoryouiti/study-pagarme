


var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");



var pesoEhValido = true;
var alturaEhValido = true;
 
if(peso <= 0 || peso > 1000){
	console.log("peso inválido");
	tdImc.textContent = "peso inválido";
	pesoEhValido = false;
}

if(altura <= 0 || altura >= 3){
	console.log("altura inválido");
	tdImc.textContent = "altura inválido";
	pesoEhValido = false;
}

if(alturaEhValido && pesoEhValido){
	var imc = peso/(altura * altura);

	tdImc.textContent = imc;
}
else{
	tdImc.textContent = "altura e/ou peso inválido";
}

