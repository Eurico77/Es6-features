class Carro {
    constructor(marca, ano, categoria, qtdPneus) {
        this.marca = marca
        this.ano = ano
        this.categoria = categoria
        this.qtdPneus = qtdPneus
    }

    /**
     * @param {{ toUppsercase: () => any; }} novaMarca
     */
    set marca(novaMarca) {
        this.marca = novaMarca.toUppsercase()
    }
}

const gol = new Carro('Gol', 2021, 'Popular', 4)
console.log(gol.qtdPneus());

