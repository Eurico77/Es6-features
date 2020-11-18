const fs = require('fs')
const path = require('path')
 
const caminho = path.join(`${__dirname}/utils/data.txt`)

function exibir(err, content) {
   console.log(content.toString());
}

fs.readFile(caminho, exibir)

// console.log('inicio sync');
// const result = fs.readFileSync(caminho)
// console.log(result.toString());
// console.log('fim sync');