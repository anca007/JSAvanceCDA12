async function callApi(url) {

    let response = await fetch(url)

    if (response.ok) {
        return response.json()
    }
}

async function getDepartements() {

    const BASE_URL = "https://geo.api.gouv.fr/departements"
    let data = await callApi(BASE_URL)
    console.log(data)
    let dep = document.getElementById('dep')

    data.forEach(function (val) {
        let option = document.createElement('option')
        option.innerText = val.code + ' - ' + val.nom
        option.value = val.code
        dep.append(option)
    })
}

function getCitiesByDep() {
    let dep = document.getElementById('dep')

    dep.addEventListener('change', async function () {

        const BASE_URL = `https://geo.api.gouv.fr/departements/${dep.value}/communes`

        let data = await callApi(BASE_URL)

        data.forEach(function (val) {

            let option = document.createElement('option')
            option.innerText = val.nom
            option.value = val.code

            document.getElementById('cities').append(option)
        })
    })
}

function init(){
    getDepartements()
    getCitiesByDep()
}

window.onload = init











