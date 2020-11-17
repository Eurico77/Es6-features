// arrow function

const saudacao = (nome) => {
  return console.log(`Fala ${nome} bicho lindo`);
};

saudacao("eurico");


// exemplo com map
const somar = (numeros) => {
  let total = 0;
  numeros.map((n) => {
    total += n;
    console.log(n);
  });

  return total;
};

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
