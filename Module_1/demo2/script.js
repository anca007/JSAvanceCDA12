function init() {

    const cities = ["Quimper", "Rennes", "Nantes", "Niort"]

    //récupérer le select
    let city = document.getElementById("city")

    cities.forEach(function (val) {
        //pour chaque élément je créé une option
        let option = document.createElement('option')
        option.innerText = val
        option.value = val.toLowerCase()

        city.append(option)
    })

    city.addEventListener("change", function(event)  {
        console.log(event)
        let val = this.value
        let p = document.createElement('p')
        p.innerText = val

        document.body.append(p)
    })


}

window.onload = init