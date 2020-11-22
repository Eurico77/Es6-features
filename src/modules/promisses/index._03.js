const radomNumber = (min, max, time) => {
  if (min > max) [max, min] = [min, max];

  return new Promise(resolve => {
     setTimeout(() => {
        const fator = max - min + 1;
        const ramdom = parseInt(Math.random() * fator) + min;
        resolve(ramdom);
      }, time);
     })
};

const generateVeryNumbers = async () => {
  return Promise.all([
   await radomNumber(1, 10, 2000),
    console.log('resolvido'),
   await radomNumber(1, 10, 3000),
    console.log('resolvido'),
   await radomNumber(1, 10, 4000),
    console.log('resolvido'),
   await radomNumber(1, 10, 5000),
   
  ]);
};

generateVeryNumbers().then((result) => console.log(result));
