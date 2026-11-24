let listaprodutos = document.querySelector(".listaprodutos")
function criarcard(title,category,image,price) {
     let cardproduto = document.createElement("div");
     let produtoimagem = document.createElement("img");
     let produtonome = document.createElement("div");
     let produtoinformações = document.createElement("div");
     let produtopreço = document.createElement("span");
     let produtocategoria = document.createElement("span");
     let produtocomprar = document.createElement("button");

     cardproduto.classList.add("cardproduto");
     produtoimagem.classList.add("produtoimagem");
     produtonome.classList.add("produtonome");
     produtoinformações.classList.add("produtoinformações");
     produtopreço.classList.add("produtopreço");
     produtocategoria.classList.add("produtocategoria");
     produtocomprar.classList.add("produtocomprar");







     return cardproduto;
}
async function buscarprodutos() {
    let url = "https://fakestoreapi.com/products";
    let resposta = await fetch(url)
    let data = await resposta.json();

    return data;
    
}

buscarprodutos();