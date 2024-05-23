let pikachu;

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
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

console.log(pikachu)