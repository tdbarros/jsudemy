//mensagem="Oláááa mundo cruel!!!!"
//alert(mensagem);
/*  Variaveis + condicional
var a = 2;
var b = 3;
var c = "teste";

var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

alert(soma);
alert(sub);
alert(mult);
alert(div);

if (c%2 == 1){
	alert("Numero é impar");
} 
else if (c%2 == 0){
     alert("Numero é par!");
} 
else{
     alert("Numero invalido!");
}
*/

/* Lacos repetição while / for

var i = 0;

while (i < 3) {

	alert (i);

	i = i+1;

}

for (var j = 0 ; j < 3 ; j++){
	alert(j);
}

*/

/* Array
var numero = 0;
var decimal = 4.5;
var texto = "Olá Mundo!"
var lista = [ "laranja" , "maçã", "banana" , "jabuticaba" ];

alert(lista);

for (i in lista){

	alert(i + " - " + lista[i]);

}
*/

/*
// Funções

function soma(a,b){
	console.log(a+b);
}
soma(2,2);

function subtracao(a,b){
	return a-b
}
var s = subtracao(5,3);
console.log(s);

function multiplicacao(a,b){
	return a*b;
}
console.log(multiplicacao(5,6));



function mensagem(nome){
	alert("Mensagem do click" + nome)
}


function mudaCor(cor){
	var elemento = document.getElementById("mensagem");
	elemento.style.color = cor;
}
*/

function valida(){
	var nome = document.getElementById('nome');
//	console.log(nome.value);
// 	alert(nome.value);

	if (nome.value == ""){
			alert("Campo nome não pode estar branco");

	}
	else {
		alert("Nome validado!");
	}
}