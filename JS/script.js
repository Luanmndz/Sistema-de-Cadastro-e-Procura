// Procura o elemento que possui o id "item"
let item = document.getElementById("item");

//Procura o elemento que possui o id "lista"
let lista = document.getElementById("lista");

//Procura o elemento que possui o id "busca"
let busca = document.getElementById("busca");

//Procura o elemento que possui o id "btnAdicionar"
let adicionar = document.getElementById("btnAdicionar");

//Cria uma matriz vazia para guardar os itens 
let itens = [];

//Quando cliccar no botão adicionar, executa a função adicionar()
adicionar.addEventListener("click", BtnAdicionar);

//Quando o usuário digitar no campo busca, executa a função busca
busca.addEventListener("keyup", buscar);

function BtnAdicionar(){
    // Adicionar o valor digitado no array , pega a galinha e leva para casa
    itens.push(item.value);

    //Cria uma nova tag <li> 
    let li = document.createElement("li");

    // Cria um texto com o valor digitado
    let texto = document.createTextNode(item.value);

    // Coloca o texto dentro da tag <li>
    li.appendChild(texto);

    //Coloca o <li> dentro da lista <ul> 
    lista.appendChild(li);
}

function buscar(){
    //Pega o valor digitado e converte para maíusculas
    let nome = busca.value.toLowerCase();

    //Busca todas as tags <li> da página
    let itensLista = document.getElementsByTagName("li");

    //Percorre todos os itens da lista 
    for (let i = 0; i < itensLista.length; i++){
        //Pega o texto do item atual e converte para maiúsculas
        let texto = itensLista[i].textContent.toLowerCase();

        if (texto.includes(nome)){
            //Se ele achar , aparece no display
            itensLista[i].style.display = "block"
        }
        else {
            // Se nao, ele da display none, some
            itensLista[i].style.display = "none"
        }
    }
}