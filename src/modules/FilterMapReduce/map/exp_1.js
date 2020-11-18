//Exp com numeros

const n = [3, 4, 5, 6, 7, 8, 9];
console.log(n);


const result = n.map((el)=> el * 2 )
console.log(result);

//exp com strings

const exp = ['eurico', 'ana', 'iris']

const r = exp.map(el => el.toLocaleUpperCase())
console.log(r);

//parametros suportados no map
const params = [2,4,5,6,7,8,66,3,2324,342]
const r2 = params.map((valor, index, array) => console.log(`o valor ${valor * 2}
, o index ${index}, o array ${array}`))