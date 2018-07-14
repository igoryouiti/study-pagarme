


var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

for (var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];
	// console.log(paciente);

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
		paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 3){
		console.log("altura inválido");
		tdImc.textContent = "altura inválido";
		pesoEhValido = false;
		paciente.classList.add("paciente-invalido");
	}

	if(alturaEhValido && pesoEhValido){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}
	else{
		tdImc.textContent = "altura e/ou peso inválido";
	}

}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}