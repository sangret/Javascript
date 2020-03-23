/* Formas de Outputs
document.getElementById("titulo").innerHTML = "Opa, tudo bem ?"

document.write("Algum Texto")

window.alert("Xesque")

console.log("Dale dele dele Doly")*/

/* Tipos de variaveis e condicionais
var nome ="Lucas"
var sobrenome = "Henrique"
var idade = 90;
var x = 10;
var y = 15;
var hora = 9;

var nomecompleto = nome+" "+sobrenome;
var total = x + y;

alert(nomecompleto);
alert(idade);
alert(total);

if (hora < 12)
{
    console.log("Bom Dia")
} else
{
    console.log("Nao e de manha")
}*/


/* Vendo o getElementById
var titulo = document.getElementById("titulo");
titulo.innerHTML = "Segundo titulo";

var campo = document.getElementById("campo");
campo.value = "Xesque";*/


/*Functions
function alterar()
{
    document.getElementById("titulo").innerHTML = "Trocou o titulo";
    document.getElementById("campo").value = "Trocou o campo";
}

function teste(x , y)
{
    document.getElementById("57").innerHTML = x;
    document.getElementById("22").value = y;
}
*/


/* Functions para trocar estilo
function azul()
{
    limpar();
    document.getElementById("titulo").classList.add('azul');
}
function vermelho()
{
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}
function verde()
{
    limpar();
    document.getElementById("titulo").classList.add('verde');
}
function limpar()
{
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('verde');
}
function mostrarTelefone(elemento)
{
    elemento.style.display = 'none';
    document.getElementById("telefone").style.display = "block"
}*/


/* Arrays e selecao em arrays
let carros = ["corolla","uno","ferrari"];
console.log(carros);

let comida = 
[
    ["arroz", "feijao", "carne"],
    ["alface", "cenoura"],
    function escrever()
    {
        console.log("comidas")
    }
]

console.log(comida[1]);
console.log(comida[0][2]);
console.log(comida[2]());*/

/*
let carro = 
{
    nome: "Uno",
    fabricante: "Fiat",
    peso: 800,
    ligado:false,
    ligar:function()
    {
        console.log("ligando o "+this.nome);
        this.ligado = true
        console.log("vrum vrum");
    },
    acelerar:function()
    {
        if(this.ligado == true)
        {
            console.log("riiiiiiiiiiiiiiiiiihhhih")
        }
    }
};
console.log(carro["nome"]);
console.log(carro.fabricante);
carro.ligar();
carro.acelerar();*/