// Esercizio Uno

// string
// boolean
// number
// any
// undefined
// null

// Esercizio Due

const myName: string = "Giovanni"
const myAge: number = 29
const myStudying: boolean = true

// Esercizio Tre

const greet = (name: string): string => {
    return "Suca " + name
}

// Esercizio Quattro

const sum = (a: number, b: number): number => {
    return a + b
}

// Esercizio Cinque

const total = (price: number, ): number => {
    return price + (price * 22) / 100
}

// Esercizio Sei

const strings = (string1: string, string2: string): number => {
    const stringsSum = string1 + string2
    return stringsSum.length
}

// Esercizio Sette

let valore: string | number;

valore = "Suca"; 
valore = 69;  

// Esercizio Otto

const union: null | undefined | number = 69

// Esercizio Nove

type days = string | number

let d1: days = "Lunedì " + 1
let d2: days = "Martedì " + 2
let d3: days = "Mercoledì " + 3
let d4: days = "Giovedì " + 4
let d5: days = "Venerdì " + 5
let d6: days = "Sabato " + 6
let d7: days = "Domenica " + 7

// Esercizio Dieci

const numbers: number[] = [1,2,3]
const numbers2: Array<number> = [1,2,3]

// Esercizio Undici

let tupla1: [string, string, string, number, number] = ["Ciao", "sono", "scemo", 22, 33]

// Esercizio Dodici

// un'interfaccia è un modello, uno "schema" che definisce proprietà e metodi di un oggetto servono soprattutto per indicare la forma degli OGGETTI, mentre i type si utilizzano più per le unioni di tipi PRIMITIVI

// Esercizio Tredici

interface Student {
    firstName: string
    lastname: string
    age: Number
}

// Esercizio Quattordici

interface User {
    email: string
    telephone: number
}

// Esercizio Quindici


interface Student2 {
    name: string,
    valutation: number,
    address?: string
}
const student: Student2[] = [
    {
        name: "Luca",
        valutation: 9,
        address: "via mimmo 12",
    }
]

// Esercizio Sedici

interface Vehicule {
    brand: string
    model: string
    price: number
}

interface Car extends Vehicule {
    color: string
    doors: number
}

// Esercizio Diciassette

const myCar: Car = {
    brand: "Fiat",
    model: "Punto",
    price: 7000,
    color: "Blue",
    doors: 5
}

// Esercizio Diciotto

// un GENERIC è un TIPO di dato passato come PARAMETRO per un'interfaccia  il suo scopo è rendere più GENERICA, RIUTILIZZABILE un'INTERFACCIA

// Esercizio Diciannove

// Peffozza

// Esercizio Venti

interface API<data> {
    success: boolean
    message: string
    data: data
  }