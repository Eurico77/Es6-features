




function exec(fn, n1, n2) {
   return fn(n1, n2)
}

const somar = (n1, n2) => n1 + n2;
const somarNoTerminal = somar;


console.log(exec(somarNoTerminal, 20, 30));
