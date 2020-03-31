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

/* Metodos de manipulacao de arrays
let lista = ["Ovo","Farinha","Corante","Massa"];
let lista1 = ["Ovo","Farinha","Corante","Massa"];
let lista2 = ["Ovo","Farinha","Corante","Massa"];
let lista3 = ["Ovo","Farinha","Corante","Massa"];
let lista4 = ["Ovo","Farinha","Corante","Massa"];
let lista5 = ["Ovo","Farinha","Corante","Massa"];
let lista6 = ["Ovo","Farinha","Corante","Massa"];
let lista7 = [45, 4, 9, 16, 25];
let lista8 = [];
let lista9 = [];
let lista10 = [];
let lista11 = [];

lista1.pop(); //remove o ultimo item do array.
lista2.shift(); //remove o primeiro item do array.
lista3.push("prato"); //adiciona um item no seu array.
lista4[0] = "ovos"; //troca o item da posicao que voce selecionou, e caso voce coloque um item numa poiscao nao alocada ele cria mais um item.
lista5.splice(1, 1); //remove itens do array onde os parametros sao, em primeiro lugar o item que voce quer selecionar e em segundo quantos itens contando com ele.
lista6.sort(); //ordena em ordem alfabetica A-Z
lista6.reverse; //ordena em ordem alfabetica Z-A, se nao usar o sort ele inverte a ordem atual.
lista8 = lista7.map(function(item) //pega cada item de um array existente, transpoe para um vazio e faz algo
{
    return item * 2; //no caso desse exemplo ele retorna o valor de cada item multiplicado por dois
});
lista9 = lista7.filter(function(item) //filtra um array com base na condicao, se for true ele pega os itens, se for false nao pega.
{
    if (item < 20)
    {
        return true;
    } else
    {
        return false;
    }
});
lista10 = lista7.every(function(item) //Retorna true ou false se todos os itens do array correspondem a condicao. Para fazer o inverso e ver se pelo menos um item corresponde basta trocar o every por some.
{
    return (item>3)? true : false //o questionamento de true ou false nao precisa ser feito com if e else, tambem existe essa forma.
});
lista11 = lista7.find(function(item) //o find retorna o primeiro item que satisfaz as condicoes, os parametros podem ser item, index e array. Se voce colocar findIndex ele acha a posicao do item no array.
{
 return (item == 16)? true : false;
})

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
let res11 = lista8;
let res12 = lista9;
let res13 = lista10;
let res14 = lista11;
 

console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
console.log(res7);
console.log(res8);
console.log(res9);*/


/* Datas
let d = new Date(); //vai pegar a data de quando foi criado.
console.log(d);
console.log(d.toDateString());
console.log(d.toUTCString());

let d1 = new Date();
let d2 = new Date();


d1.setFullYear(2022); //troca o ano conforme parametros. pode ser usado como mes e dia.
d2.setDate(d.getDate()+5); //soma ao dia a quantidade que voce colocou, o mesmo se aplica a horas minutos e segundos

let novoValor = d.getFullYear; //retorna o Ano
let novoValor1 = d.getMonth; //retorna o mes -1
let novoValor2 = d.getDay; //retorna o dia da semana comecando do domingo como 0
let novoValor3 = d.getDate //pega o dia atual do mes
let novoValor4 = d.getHours //pega as horas
let novoValor5 = d.getMinutes //pega os minutos
let novoValor6 = d.getSeconds //pega os segundos
let novoValor7 = d.getMilliseconds //pega os milissegundos
let novoValor8 = d.getTime //pega o timestamp(quantidade de milissegundos desde 01/01/1970)
let novoValor9 = Date.now(); //pega o timestamp atual de agora
let novoValor10 = d1;
let novoValor11 = d2;

console.log(novoValor);
console.log(novoValor2);
console.log(novoValor3);
console.log(novoValor4);
console.log(novoValor5);
console.log(novoValor6);
console.log(novoValor7);
console.log(novoValor8);
console.log(novoValor9);
console.log(novoValor10);
console.log(novoValor11);*/

/* Classe Math
let novoValor = Math.PI; //calculo de PI
let novoValor2 = Math.round; //arredonda o numero do mesmo jeito que o SGA
let novoValor3 = Math.floor; //arredonda sempre para baixo
let novoValor4 = Math.ceil; //arredonda sempre para cima
let novoValor5 = Math.abs(-15465.203); //retorna o numero positivo dele
let novoValor6 = Math.min(1, 3, 5, 100); //retorna o menor numero.
let novoValor7 = Math.max(45, 98, 2, 100); //retorna o maior numero.
let novoValor8 = Math.random(); //retorna um numero aleatorio entre 0 e 1

console.log(novoValor);
console.log(novoValor2);
console.log(novoValor3);
console.log(novoValor4);
console.log(novoValor5);
console.log(novoValor6);
console.log(novoValor7);
console.log(novoValor8);*/


/* Intervalos
let timer;
function comecar()
{
     timer = setInterval(showTime, 1000)
}
function parar()
{
    clearInterval(timer);
}


function showTime()
{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+":"+m+":"+s;

    document.querySelector("#demo").innerHTML = txt;
}

function rodar()
{
    setTimeout(function()
    {
        alert("Rodou!")
    },2000)
}*/


let nome = "Lucas";
let idade = 22;

let frase = "Meu nome e "+nome+" e eu tenho "+idade+" anos e ano que vem eu farei "(idade);
let frase2= `Meu nome e ${nome} e eu tenho ${idade} anos e ano que vem farei ${idade+1}`

console.log(frase)
console.log(frase2)