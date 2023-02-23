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
        itens[existe.id] = itemAtual; //att o localStorage
    }else{
        itemAtual.id = itens.length
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
    lista.appendChild(novoItem);
    
    
} 

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML=item.quantidade;
}