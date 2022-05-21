import * as fs from 'node:fs'

type TObjetoGenerico = { [key: string]: any}

export abstract class Entidade {
    protected _dados: TObjetoGenerico = {
        nome: "Rogério",
        nascimento: new Date("1986-12-23")
    }

    constructor() {}

    load() {}

    store() {
        const dadosString = JSON.stringify(this._dados)
        // @todo: mudar para assíncrono
        fs.writeFileSync("teste.json", "Olá, arquivo maroto!")
    }

    delete() {}
}