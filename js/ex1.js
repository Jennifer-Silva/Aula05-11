document.querySelector('#btn').addEventListener('click',()=>{
    //corpo da função

    //declarando variáveis de memória
    let nome, sobrenome, dep;
    
    //atribuindo valores ás variáveis
    nome = document.getElementById('nome').value
    sobrenome = document.getElementById('sobrenome').value;

    //converter para numero
    dep = parseInt(document.getElementById('dependentes').value);
    total=dep*150;

    //alterando para monetario
    total= total.toLocaleString('pt-br',{style:'currency',currency:'BRL'})

    document.write(total)

    //document.write('A pessoa '+nome+' '+sobrenome+ ' tem ' +dep+ ' dependentes.')
})