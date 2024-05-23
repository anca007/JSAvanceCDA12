// let pikachu;
//
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => {
//             pikachu = data
//             console.log(pikachu)
//             let p = document.createElement('p')
//             p.innerText = pikachu.name
//
//             let img = document.createElement('img')
//             img.src = pikachu.sprites.other.home.front_default
//
//             document.getElementById('pokemon').append(p)
//             document.getElementById('pokemon').append(img)
//         }
//     ).catch(error => console.log(error))
//
// console.log(pikachu)


function synchrone() {
    let i = 0;
    while (i < 3_000_000_000) {
        i++
    }
    return "Fin de calcul"
}

function promesse() {
    return Promise.resolve()
        .then(synchrone)
}

// console.log("avant")
// promesse().then(retour => console.log(retour))
// console.log("après")

//async
const getSki = (number) => {

    const skis = {
        1: 'alpin',
        2: 'nautique',
        3: 'fond',
        4: 'randonnée'
    }

    return Promise.resolve(skis[number])
}
//getSki(2).then(data => console.log(data))

const getSkiAsync = async (number) => {

    const skis = {
        1: 'alpin',
        2: 'nautique',
        3: 'fond',
        4: 'randonnée'
    }

    let i = 0;
    while (i < 1_000_000_000) {
        i++
    }
    console.log("------------FIN---------------", number)
    return skis[number]
}

//getSkiAsync(3).then(data => console.log(data))


//await
const sportDeSki = async () => {
    const alpin = getSkiAsync(1)
    const rando = getSkiAsync(2)
    return await Promise.all([alpin, rando])
}

const sportDeSki2 =  async () => {
    const alpin = await getSkiAsync(3)
    const rando = await getSkiAsync(4)
    return [alpin, rando]
}

sportDeSki2().then(console.log)
sportDeSki().then(console.log)



























