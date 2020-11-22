const radomNumber = (min, max) => {
   if(min > max) {
      [max, min] = [min, max]
   }
   return new Promise(resolve => {
      const fator = max - min + 1
      const ramdom = parseInt(Math.random() * fator ) + min
      resolve(ramdom)
   })
}

const result = radomNumber(20, 12)
.then(console.log)
