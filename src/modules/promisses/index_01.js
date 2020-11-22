
const syncTime = (time = 2000) => {
 
   return new Promise(resolve => {
    setTimeout(() => {
         console.log('Abri a promisse');
         resolve('resolvendo a promise')
      }, time)
   })

} 

syncTime(4000).then(texto => console.log(texto))


function esperar(time = 2000) {
   return new Promise(function(resolve) {
      setTimeout(function() {
         console.log('promisse aberta');
         resolve('plak')
      }, time)
     
   })
}

esperar(3000)
   .then(() => esperar())
   .then(esperar)