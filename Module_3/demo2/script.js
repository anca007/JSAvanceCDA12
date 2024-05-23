let pikachu;

//fetch retourne une promise que l'on peut traiter avec le then
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    //on extraie la partie json
    .then(response => response.json())
    //on traite les données
    .then(data => {
            pikachu = data
            console.log(pikachu)
            let p = document.createElement('p')
            p.innerText = pikachu.name

            let img = document.createElement('img')
            img.src = pikachu.sprites.other.home.front_default

            document.getElementById('pokemon').append(p)
            document.getElementById('pokemon').append(img)
        }
    )
//cette variable est vide au moment de l'exécution du console.log
//car le code a continué à être éxécuté avant que la réponse de l'api est été traitée
console.log(pikachu)