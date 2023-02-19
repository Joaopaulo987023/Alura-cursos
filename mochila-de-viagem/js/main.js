const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
form.addEventListener('submit', (e)=>{
    // primeiro paramos o evento de sumit
    e.preventDefault()
    // depois pegamos dentro do elemento passando pelo target indo até um array que existe dos elementos do formulário chamando elements e pegamos seus valores.
    criaElemento(e.target.elements['nome'].value,e.target.elements['quantidade'].value)
})
function criaElemento(nome, quantidade){
    console.log(nome);
    console.log(quantidade);


    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome; // usando o += pois um elemento já foi adicionado no novo item usando o appendChild e agora estamos adicionando outro.

    lista.appendChild(novoItem);
    
} 