// criacao de como map funciona

Array.prototype.mymap = function(fn) {
   const newArray = []
   for (let i = 0; i < this.length; i++) {
      const result = fn(this[i], i, this );
      newArray.push(result)
      
   }
}