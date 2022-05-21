//@ts-ignore
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { Pessoa } from "./Entidades/Pessoa"

const r1 = readline.createInterface({input, output})

const pessoa = new Pessoa("Daniel", new Date("1986-07-07"))
pessoa.store()

async function main() {
    const nome = await r1.question("Qual é o seu nome? ")
    const idade = await r1.question("Qual é a sua idade? ")
    const dataNasc = await r1.question("Qual é a sua data de nascimento?")
    const pessoa = new Pessoa(nome, new Date(dataNasc))
    pessoa.store()
    console.log (nome, idade)
    process.exit()
}

main()