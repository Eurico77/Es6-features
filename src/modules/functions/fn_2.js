// arrow function

const saudacao = (nome) => {
  return console.log(`Fala ${nome} bicho lindo`);
};

saudacao("eurico");


// exemplo com map
const somar = (...numeros) => {
   console.log(` me diz se isso é um array valido ${Array.isArray(numeros)}`);
  let total = 0;
  numeros.map((n) => {
    total += n;
    console.log(`o N esta percorrendo o indicia atual ${n}`);
  });

  return total;
};

console.log(`O valor total é ${somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);
