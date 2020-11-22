const fs = require('fs')
const path = require('path')
 
const caminho = path.join(`${__dirname}/utils/data.txt`)

const exibir = conteudo => {
   return new Promise(resolve => {
      fs.readFile(conteudo, (_, conteudo) => {
         resolve(conteudo.toString())

      })
      
   })
}

exibir(caminho).then(conteudo => console.log(conteudo))

