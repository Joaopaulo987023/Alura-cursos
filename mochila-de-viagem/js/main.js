const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

const itens = JSON.parse(localStorage.getItem('item'))||[];



itens.forEach((elemento)=>{
     criaElemento(elemento);
 })

form.addEventListener('submit', (e)=>{
    // primeiro paramos o evento de sumit
    e.preventDefault()
    // depois pegamos dentro do elemento passando pelo target indo até um array que existe dos elementos do formulário chamando elements e pegamos seus valores.
    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const existe = itens.find(elemento=> elemento.nome === nome.value);
    const itemAtual ={
        nome: nome.value,
        quantidade:quantidade.value
    }

    if(existe){
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual)
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual; //att o localStorage
    }else{
        itemAtual.id = itens[itens.length- 1] ? (itens[itens.length - 1]).id + 1 : 0
        criaElemento(itemAtual)

        itens.push(itemAtual);
    }


    
  
    
    localStorage.setItem('item',JSON.stringify(itens));

    

    nome.value =' ';
    quantidade.value=' ';

})
function criaElemento(item){

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id; //criando um data-attibrute via js 
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome; // usando o += pois um elemento já foi adicionado no novo item usando o appendChild e agora estamos adicionando outro.
    novoItem.appendChild(botaoDeleta(item.id))
    lista.appendChild(novoItem);
    
    
} 

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML=item.quantidade;
}
function botaoDeleta (id){
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = 'X'
    elementoBotao.addEventListener('click',function(){
        deletaElemento(this.parentNode, id)
    })
    return elementoBotao

}
function deletaElemento(tag, id){
    tag.remove()
    itens.splice(itens.findIndex(elemento =>elemento.id === id),1)
    localStorage.setItem('item',JSON.stringify(itens));
}