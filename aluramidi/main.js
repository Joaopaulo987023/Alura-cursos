function tocaSom(idSom){
    const elemento=document.querySelector(idSom).play

    elemento === null ? console.log('erro') : console.log('ok');
};

const listaDeBotoes = document.querySelectorAll('.tecla');

document.addEventListener('click',function(e){
    const el = e.target;
    
    for(let contador = 0; contador < listaDeBotoes.length; contador++){
        const tecla = listaDeBotoes[contador];
        if(el === tecla){
            const idAudio = `#som_${listaDeBotoes[contador].classList[1]}`; // Acessando a lista de id que tem dentro de cada elemento da lista
            console.log(idAudio);                                           // de botoes, e passando ela como parametro da função, tocaSom.
            tocaSom(idAudio);
        }                                                                   // acessando as classes de um elemento através do atributo 
        
        tecla.addEventListener('keydown',function(e){
            // const el = e.target;
            if (e.code === 'Enter' || e.code === 'Space' ){
                tecla.classList.add('ativa');
            }
        tecla.addEventListener('keyup',function(e){
            // const el = e.target;
            if (e.code === 'Enter'|| e.code === 'Space' ){
                tecla.classList.remove('ativa');
            }   
            
        
        });
        
        
    });
    }})
