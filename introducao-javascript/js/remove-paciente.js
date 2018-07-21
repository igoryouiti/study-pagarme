
// remove pacientes da tabela
var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
	// funciona do mesmo jeito sem apagar nada >.>
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove();
	}, 450);
	
		    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
/*    if (event.target.tagName == 'TD') {
        event.target.parentNode.remove()
    }*/
});

