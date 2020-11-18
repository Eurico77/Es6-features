const carrinho = [
   { nome: 'Caderno', qtd: 10, preco: 22.99 },
   { nome: 'Lapis', qtd: 4, preco: 2.45 },
   { nome: 'Caneta', qtd: 3, preco: 4.59 },
   { nome: 'Bola de Futebol', qtd: 100, preco: 20.34 },
   { nome: 'SSd', qtd: 3, preco: 200 },
   { nome: 'Ps4', qtd: 2, preco: 3232.23 },
   { nome: 'Bola de Basquete', qtd: 2, preco: 23.52 },
   { nome: 'Fone de Ouvido', qtd: 3, preco: 234.3 },
   { nome: 'Memoria RAM', qtd: 4, preco: 623.55 },
   { nome: 'Leite em pó', qtd: 34, preco: 23.54 },
   { nome: 'Nutela', qtd: 4, preco: 23.12 },
   { nome: 'Impressora', qtd: 0, preco: 3333.3 },
 ];

 const filtrarQtd = carrinho.filter(item => item.qtd > 10)
 .map((nome => nome.nome))
 
 console.log(filtrarQtd);

