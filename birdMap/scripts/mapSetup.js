

var map = L.map('map').setView([43.26120612479979, -73.037109375],3);
L.tileLayer("https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=oO92R6JLSUVX72geBwkf", {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

var birdIcon = L.icon({
    iconUrl: './images/birdIcon.png',
    iconSize:     [25, 25], // size of the icon
    iconAnchor:   [12.5, 12.5], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
});


var orlando7_2021 = L.marker([28.539011572593626, -81.38725171204213], {icon: birdIcon}).addTo(map);
orlando7_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1iKC2ZYf5-FLwsZiS4rOwgH2o_frsAcpD?usp=sharing'>Orlando Birds: 7.20.21</a><br>\
–Anhinga<br>\
–Boat-Tailed Grackle<br>\
–Limpkin<br>\
–Little-blue heron<br>")

var marySmokies_2021 = L.marker([35.61262621512952, -83.55385066029562], {icon: birdIcon}).addTo(map);
marySmokies_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1uD9SOipcln-YHNNjpEz7vr4GTO9YPDsI?usp=sharing'>Maryville and Great Smokies: 7.16.21</a><br>\
–Green Heron<br>\
–Hairy Woodpecker<br>\
–Norther Parula<br>\
–Scarlet Tanager<br>")

var strasbourg_2021 = L.marker([48.580642302980884, 7.741834462244451], {icon: birdIcon}).addTo(map);
strasbourg_2021.bindPopup("<a href='https://drive.google.com/drive/folders/11uzPzOX0ZPOnx_MhzacI5jG_bBnf6f-u?usp=sharing'>Strasbourg: 7.5.21</a><br>\
–Egyptian Goose<br>\
–Eurasian Coot<br>")

var luxembourg_2021 = L.marker([49.611025419045404, 6.129832384730395], {icon: birdIcon}).addTo(map);
luxembourg_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1TDugW7HoEK0zoTnLs4e0r_mmIiQ_Yaoo?usp=sharing'>Luxembourg: 7.3.21</a><br>\
–Gray Heron<br>\
–Eurasian Blackbird<br>\
–The Ever Majestic Rock Dove<br>")

