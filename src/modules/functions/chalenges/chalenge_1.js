// criar uma função que retorne 3 valores
const soma = num => num2 => num3 => num + num2 + num3; 




const multiplicar = num => num2 => num3 => num + num2 * num3; 
const subtrair = num => num2 => num3 => num + num2 - num3; 

console.log(soma(2)(4)(2));


// criar uma função que receba 3 parametros e o ultimo seja uma funçao para reso
//lver os dois primeiros 

function test(numero) {
   return {
      function(numero2) {
         return {
            function(fn) {
               return fn(numero, numero2)
               
            }
         }
      }
   }
}

const r1 = n1 => n2 => fn => fn(n1, n2)

const mult = (a, b) => a * b;

console.log(r1(2)(5)(mult));

