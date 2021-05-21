
function clicou(){
    document.getElementById("agradecimento").innerHTML="Obrigado por clickar, agora da uma mamada aqui :)"
    //alert("Obrigado por clicar, agora mamaki");
}

function redirecionar(){
    //window.open("https://www.youtube.com"); //janela diferente
    window.location.href="https://www.youtube.com"; //mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar a rola :)";
    elemento.innerHTML="Obrigado por passar a rola :)";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe a rola aqui";
    elemento.innerHTML="Passe a rola aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
return n1+n2;
}

var validar=0;

function validade(idade){
    if (idade>=18){
        validar=true
    }else{
        validar=false
    }
}

var idade=prompt("Qual tua idade?");
validade(idade)
console.log(validar);
*/

/*
var d=new Date();
alert(d.getFullYear());
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/


/*
var count=0;
while(count<=5){
    console.log(count);
    count=count+1//ou count++;
}
*/

/*
var idade=prompt("Qual tua idade?");
if(idade>=18){
    alert("maior de idade");
}
else {
    alert("menor de idade");
}
*/



/*var fruta={nome:"maçã", cor:"vermelha"}
console.log(fruta);
*/

/*var lista=["maçã", "pêra", "laranja"];
//lista.pop();
lista.push("uva");

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - ")); */

/*var nome = "Sebastião Oliveira";
var idade=21;
var idade2=22
var frase="My dick it's bigger cause i'm a crazzy n-word";
//alert(nome+" tem "+idade+" anos");
//alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.toLowerCase());
//alert(frase.replace("My dick", "My brain")); */