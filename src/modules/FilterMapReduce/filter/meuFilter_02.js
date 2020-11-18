
//CRIANDO MEU FILTER
Array.prototype.myFilter = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
