

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