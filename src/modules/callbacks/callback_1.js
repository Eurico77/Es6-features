
function exec(fn, n1, n2) {
   return fn(n1, n2)
}

const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;

console.log(exec(somar, 20, 30));

const r2 = exec(subtrair, 2, 5)
console.log(r2);

const cb = () => console.log('testando callbacks com setInterval');

setInterval(cb, 1000)