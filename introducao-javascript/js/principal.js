


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
		var imc = peso/(altura * altura);

		tdImc.textContent = imc.toFixed(2);
	}
	else{
		tdImc.textContent = "altura e/ou peso inválido";
	}

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	var form = document.querySelector("#form-adiciona")

	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;


	var pacienteTr = document.createElement("tr");

	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");

	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
});