const carrinho = [
  { nome: "Caderno", qtd: 10, preco: 22.99, fragil: true },
  { nome: "Lapis", qtd: 4, preco: 2.45, fragil: true },
  { nome: "Caneta", qtd: 3, preco: 4.59, fragil: true },
  { nome: "Bola de Futebol", qtd: 100, preco: 20.34, fragil: true },
  { nome: "SSd", qtd: 3, preco: 200, fragil: true },
  { nome: "Ps4", qtd: 2, preco: 3232.23, fragil: false },
  { nome: "Bola de Basquete", qtd: 2, preco: 23.52, fragil: true },
  { nome: "Fone de Ouvido", qtd: 3, preco: 234.3, fragil: true },
  { nome: "Memoria RAM", qtd: 4, preco: 623.55, fragil: false },
  { nome: "Leite em pó", qtd: 34, preco: 23.54, fragil: true },
  { nome: "Nutela", qtd: 4, preco: 23.12, fragil: false },
  { nome: "Impressora", qtd: 4, preco: 3333.3, fragil: true },
];
// desafio 
// 1. apenas filtrar produtos com o status fragil: true
// 2. pegar qtd, preço
// 3. fazer a media dos totais 

const result = carrinho
   .filter(p => !p.fragil)
   .map(p => p.qtd * p.preco)
   .reduce((acc, el) => {
      const newQtd = acc.qtd + 1
      const newTotal = acc.total + el
      console.log(acc, el);
      return {
         qtd: newQtd,
         total: newTotal, 
         media: newTotal / newQtd
      }

   }, {qtd: 0, total: 0, media: 0})


// const itensFrageis = carrinho
//    .filter(item => item.fragil)     
//    .map(item => item.qtde * item.preco)  
//    const mediaDosTotais = itensFrageis
//    .reduce((acc, el) => acc + el )  / itensFrageis.length
  

console.log(result);

// console.log(mediaDosTotais);