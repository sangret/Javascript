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


/* Switch
let dia = 7;
let diaNome = "";

switch(dia)
{
    case 1:
        diaNome = "Segunda-Feira"
        break;

    case 2:
        diaNome = "Terca-Feira"
        break;
    
    case 3:
        diaNome = "Quarta-Feira"
        break;
    
    case 4:
        diaNome = "Quinta-Feira"
        break;

    case 5:
        diaNome = "Sexta-Feira"
        break;

    case 6:
        diaNome = "Sabado"
        break;
    
    case 7:
        diaNome = "Domingo"
        break;

    default:
        diaNome = "Dia inexistente"
        break;
}

document.getElementById("dia").innerHTML= "Hoje e "+diaNome;*/


/* Loop For e For Array
let texto = "";


for(let i = 1; i <=50 ; i++)
{
    texto = texto + i +" "
}

document.getElementById("texto").innerHTML = texto

let carros = ["corolla","uno","ferrari","fusca"];

let html = "<ul>";

for(let i in carros)
{
    html += "<li>"+ carros[i] +"</li>"
}

html += "</ul>";

document.getElementById("demo").innerHTML = html*/


/* While
let html = ""; 
let c = 0;

while( c < 10 )
{
    html += "Numero: "+c+" ";
    c++;
}

document.getElementById("while").innerHTML = html*/


/* Metodos de manipulacao de String
let nome = "Lucas Henrique Martins de Oliveira"
let nome2 = "          Xesquedele              "
let resultado = nome.length //pega a quantidade de caracteres da string.
let resultado1 = nome.indexOf("Henrique") //pega a partir da posicao que achou, se for logo a primeira a posicao e 0 se nao existir a posicao e -1.
let resultado2 = nome.substr(0, 5) //voce coloca de parametro a posicao inicial e quantidade de caracteres que ira selecionar. se quiser pegar a partir de uma voce so coloca a inicial. quando o numero e negativo ele conta a partir do final.
let resultado3 = nome.replace("Lucas" , "Sangret") //recebe dois parametros, o primeiro recebe o texto pra procurar o segundo vai ser o que vai substituir o primeiro 
let resultado4 = nome.toUpperCase(); //coloca tudo em maiusculo
let resultado5 = nome.toLowerCase(); //coloca tudo minusculo
let resultado6 = nome.concat(" Sangret"); //concatena a string na outra, tem que ter espaco caso necessario. Nao e muito usado
let resultado7 = nome2.trim(); // retira todos os espacos da string
let resultado8 = nome.charAt(3); // te mostra qual caractere esta na posicao que voce passou no parametro
let resultado9 = nome.split(" ") // pega o parametro que voce deu e transforma a string em um array.


console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);
console.log(resultado7);
console.log(resultado8);
console.log(resultado9);*/


/* Metodos de manipulacao de Numbers
let n = 10;
let n1 = 10.41564134641654;
let n2 = "25.9";

let res = n.toString(); //transforma em string
let res1 = n1.toFixed(2) //"arredonda" os numeros decimais para a quantidade de numeros que voce coloca no parametro
let res2 = parseInt(n2) + 5; //transforma string em numero do tipo inteiro
let res3 = parseFloat(n2) +5.1 //transforma string em numero do tipo decimal(double/float)

console.log(res)
console.log(res1)
console.log(res2)
console.log(res3)*/


let lista = ["Ovo","Farinha","Corante","Massa"];
let lista1 = ["Ovo","Farinha","Corante","Massa"];
let lista2 = ["Ovo","Farinha","Corante","Massa"];
let lista3 = ["Ovo","Farinha","Corante","Massa"];
let lista4 = ["Ovo","Farinha","Corante","Massa"];
let lista5 = ["Ovo","Farinha","Corante","Massa"];
let lista6 = ["Ovo","Farinha","Corante","Massa"];

lista1.pop(); //remove o ultimo item do array.
lista2.shift(); //remove o primeiro item do array.
lista3.push("prato"); //adiciona um item no seu array.
lista4[0] = "ovos"; //troca o item da posicao que voce selecionou, e caso voce coloque um item numa poiscao nao alocada ele cria mais um item.
lista5.splice(1, 1); //remove itens do array onde os parametros sao, em primeiro lugar o item que voce quer selecionar e em segundo quantos itens contando com ele.
lista6.sort(); //ordena em ordem alfabetica A-Z
lista6.reverse; //ordena em ordem alfabetica Z-A, se nao usar o sort ele inverte a ordem atual.


let res = lista.toString(); //transforma o array em uma string unica
let res2 = lista.join("-"); //faz o inverso do split, ele pega a mesma coisa que um toString mas voce pode definir o separador no parametro
let res3 = lista.indexOf("corante"); //proucura o item do parametro e retorna a posicao, caso ele nao ache ele retorna -1
let res4 = lista1;
let res5 = lista2;
let res6 = lista3;
let res7 = lista4;
let res8 = lista5;
let res9 = lista.concat(lista2, lista3, lista4); //junta dois ou mais arrays
let res10 = lista6;
let res11 = lista.toString();
let res12 = lista.toString();
let res13 = lista.toString();
let res14 = lista.toString();

console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
console.log(res9);
