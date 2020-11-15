const bomDia = function() {
   console.log('bom dia ');
}

const boaTarde = function() {
   console.log('boa tarde');
}


function executarQualquerCoisa(fn) {

   typeof fn === 'function' ? fn() : 'Não é função';
   // if(typeof fn == 'function') {
   //   fn()
   // }
}

executarQualquerCoisa(3)
executarQualquerCoisa(boaTarde)
executarQualquerCoisa(bomDia)



const potencia2 = base1 => exp1 => Math.pow(base1, exp1)


function potencia(base) {
   return function(exp) {
      return Math.pow(base, exp)
   }
}


const result2 = potencia2(2)
console.log(result2(8));

const result = potencia(2)
console.log(result(8));