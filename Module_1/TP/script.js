let mysteryWord = getRandomWord()
console.log(mysteryWord)

function getRandomWord() {
    let num = Math.floor(Math.random() * dico.length)
    return dico[num]
}

function displayMysteryWord() {
    const domWord = document.getElementById('mysteryWord')
    //utilisation d'une expression régulière regew101.com
    domWord.innerText = mysteryWord.replace(/\w/g, '_')
}

function checkLetter(letter) {

    //récupération du mot et transofmration en tableau de caractère
    let domWord = document.getElementById('mysteryWord').innerText.split('')

    //boucle sur toutes les lettres, si correspondance on modifie le mot du DOM
    for (let i = 0; i < mysteryWord.length; i++) {
        if (mysteryWord[i] === letter) {
            domWord[i] = letter
        }
    }
    document.getElementById('mysteryWord').innerText = domWord.join('')
    checkWinOrLoose()
}

function checkWinOrLoose() {
    let domWord = document.getElementById('mysteryWord').innerText
    let attempt = document.getElementById('attempts').innerText

    //si mots identiques, c'est win
    if (domWord === mysteryWord) {
        alert("Bravo ! T'es un champion, champion ! ")
    } else {
        //sinon on décrémente le nombre de tentatives
        attempt--
        if (attempt == 0) {
            alert("Perdu ! ")
        } else {
            document.getElementById('attempts').innerText = attempt
        }
    }
}

function createLetters() {
    let letters = document.getElementById('letters')

    //65 = A, 90 = Z https://www.ascii-code.com/fr
    for (let i = 65; i <= 90; i++) {
        //récupère la letter en focntion de son numéro
        const letter = String.fromCharCode(i)
        //je crée mon bouton
        const button = document.createElement('button')
        button.innerText = letter

        //ajout de l'évènement sur les boutons
        button.addEventListener("click", function () {
            checkLetter(letter)
        })

        //ajout dans le dom
        letters.append(button)
    }
}

function init() {
    createLetters()
    displayMysteryWord()
}

window.onload = init

