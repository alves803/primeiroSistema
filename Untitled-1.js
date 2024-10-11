let total = 0;

function adicionarAoCarrinho(nome, preco) {
    const itensCarrinho = document.getElementById('itensCarrinho');
    const novoItem = document.createElement('li');
    novoItem.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    itensCarrinho.appendChild(novoItem);
    
    total += preco;
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}
