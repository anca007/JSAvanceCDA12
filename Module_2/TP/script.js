import {Question} from "./Question.js";
import {Quiz} from "./Quiz.js";

let q1 = new Question('ça va ?', ['oui', 'non', 'autre'], 0)
let q2 = new Question('et toi ?', ['oui', 'non', 'autre'], 1)
let q3 = new Question("T'es sûr ?", ['oui', 'non', 'autre'], 2)

let quiz = new Quiz()
quiz.ajouterQuestion(q1)
quiz.ajouterQuestion(q2)
quiz.ajouterQuestion(q3)

quiz.afficherQuestion(q1)
document.getElementById('submit').addEventListener('click', function () {
    quiz.collecterReponse()
})

















