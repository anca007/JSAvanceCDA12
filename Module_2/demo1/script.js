const livre1 = {
    title : "Metro 2033",
    author : "Un gars russe",
    year : 2002,
    getDescription :  function () {
        return `${this.author} a écrit ${this.title} en ${this.year}`
    }
}

console.error(livre1)
livre1.editor = "Gallimard"

console.log(livre1)
console.log(livre1.editor)
console.log(livre1.getDescription())

