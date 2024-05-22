class RPG{

    #name
    #year
    #editor
    #genre

    constructor(name, year = 2000, editor = "Nintendo", genre = "Fantasy") {
        this.#name = name
        this.#year = year
        this.#editor = editor
        this.#genre = genre
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        this.#year = value;
    }

    get editor() {
        return this.#editor;
    }

    set editor(value) {
        this.#editor = value;
    }

    get genre() {
        return this.#genre;
    }

    set genre(value) {
        this.#genre = value;
    }
}

class RPG2{

    constructor(name, year = 2000, editor = "Nintendo", genre = "Fantasy") {
        this._name = name
        this._year = year
        this._editor = editor
        this._genre = genre
    }

    // get name() {
    //     return this._name;
    // }
    //
    // set name(value) {
    //     this._name = value;
    // }
    //
    // get year() {
    //     return this._year;
    // }
    //
    // set year(value) {
    //     this._year = value;
    // }
    //
    // get editor() {
    //     return this._editor;
    // }
    //
    // set editor(value) {
    //     this._editor = value;
    // }
    //
    // get genre() {
    //     return this._genre;
    // }
    //
    // set genre(value) {
    //     this._genre = value;
    // }
}



// let ff7 = new RPG("Final Fantasy 7", 1997, "SquareEnix")
// console.log(ff7.name)
// ff7.name = "FF7 Remaster"
// console.log(ff7.name)
//
// let skyrim = new RPG2("Skyrim")
// console.log(skyrim.name)
// skyrim.name = "Skyrim Remaster"
// console.log(skyrim.name)

//separateur numérique
const billion = 1_000_000_000

//chainage optionnel
let person = {
    name : "Michel",
    age : 35,
    address : {
        number : 42
    }

}

console.log(person.address.city ?? "New-York")

//spread
let tab1 = [0,1,2,3,4]
let tab2 = [9,8,7,6,5]

tab1.push(...tab2)
console.log(tab1)














