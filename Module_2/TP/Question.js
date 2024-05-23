export class Question {

    #enonce
    #reponses
    #reponseCorrecte

    constructor(enonce, reponses, reponseCorrecte) {
        this.#enonce = enonce
        this.#reponseCorrecte = reponseCorrecte
        this.#reponses = reponses
    }

    get enonce() {
        return this.#enonce;
    }

    set enonce(value) {
        this.#enonce = value;
    }

    get reponses() {
        return this.#reponses;
    }

    set reponses(value) {
        this.#reponses = value;
    }

    get reponseCorrecte() {
        return this.#reponseCorrecte;
    }

    set reponseCorrecte(value) {
        this.#reponseCorrecte = value;
    }

    afficher() {

        let divQuiz = document.getElementById('quiz')

        let divEnonce = document.createElement('div')
        divEnonce.innerText = this.enonce
        divQuiz.append(divEnonce)

        this.reponses.forEach(function (val, idx) {

            let radio = document.createElement('input')
            radio.type = 'radio'
            radio.name = 'reponses'
            radio.value = idx
            divQuiz.append(radio)

            let label = document.createElement('label')
            label.innerText = val
            divQuiz.append(label)
        })
    }
}














