export class Quiz {

    #questions
    #score
    #index

    constructor() {
        this.#questions = []
        this.#score = 0
        this.#index = 0
    }

    afficherQuestion(question) {
        document.getElementById('quiz').innerHTML = ''
        question.afficher()
    }

    ajouterQuestion(question) {
        this.questions.push(question)
    }

    afficherResultat() {
        document.getElementById('quiz').innerHTML = `<div>Bravo, tu as ${this.score} points !</div>`
    }

    collecterReponse() {

        let radioReponse = document.querySelector('input[name=reponses]:checked')
        if (radioReponse && radioReponse.value == this.questions[this.index].reponseCorrecte) {
            this.score++
        }
        this.index++
        this.afficherQuestionSuivante()
    }

    afficherQuestionSuivante() {

        if (this.index < this.questions.length) {
            this.afficherQuestion(this.questions[this.index])
        } else {
            this.afficherResultat()
        }
    }

    get questions() {
        return this.#questions;
    }

    set questions(value) {
        this.#questions = value;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
    }

    get index() {
        return this.#index;
    }

    set index(value) {
        this.#index = value;
    }
}