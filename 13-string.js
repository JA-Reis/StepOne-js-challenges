// Escreva uma função que converte o nome para iniciais. 
// Por exemplo, se eu passar o nome João e sobrenome Viana, a função deve retornar J.V.

// O retorno deve ser duas letras maiúsculas, seguidas de um ponto.

// Outros exemplos:
// `Maria Silva` => `M.S.`
// `Pedro Pedroso`  => `P.P`

function abbrevName(firstName,lastName){
	let firstInicial = firstName.charAt(0);
	let secondInicial = lastName.charAt(0);
	console.log(firstInicial.toUpperCase() + "." + secondInicial.toUpperCase() + ".");
	return;
}

abbrevName("Airton","Reis")


//Solução da Saty
function abbrevName(firstName,lastName){
	return firstName[0] + "." + lastName[0] + ".";
}

console.log(abbrevName("Airton","Reis"))
