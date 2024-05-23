let map;
let marker

function getLatLong() {
    //appel à l'api
    fetch("http://api.open-notify.org/iss-now.json")
        //de la réponse récupérée je n'extrais que la partie JSON
        .then(response => response.json())
        //je traite les données
        .then(data => {
            const latitude = data['iss_position'].latitude
            const longitude = data['iss_position'].longitude
            document.getElementById('position').innerText = latitude + ' ' + longitude
            //permet de se déplacer sur la carte
            map.flyTo([latitude, longitude], 5)
            //permet de placer un marker
            marker.setLatLng([latitude, longitude]);
        })
}

function init(){
    //initialise la map aux coordonnées de Londres
    map = L.map('map').setView([51.505, -0.09], 13);

    //ajoute la carte d'open street map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //création de l'icon
    let issIcon = L.icon({
        iconUrl: 'image/iss.png',
        iconSize:     [64, 64], // size of the icon
        iconAnchor:   [32, 32], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    //placement du marker au sur la position initiale
    marker = L.marker([51.5, -0.09], {icon: issIcon}).addTo(map);

    //on appelle l'api toutes les secondes pour mettre à jour les coordonnées
    setInterval(
        getLatLong,
        1000
    )
}

window.onload = init




