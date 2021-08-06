

var map = L.map('map').setView([43.26120612479979, -73.037109375],3);
L.tileLayer("https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=oO92R6JLSUVX72geBwkf", {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

var birdIcon = L.icon({
    iconUrl: './images/birdIcon.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -5] // point from which the popup should open relative to the iconAnchor
});




var fourty_falstaff_2021 = L.marker([43.17021780497921, -77.55809876620434], {icon: birdIcon}).addTo(map);
fourty_falstaff_2021.bindPopup("<a href ='https://drive.google.com/drive/folders/1RjqoUPUvnAo2HcNcsOIiZ8k6NE6zFDng?usp=sharing' target='_blank'>40 Falstaff: 6.1.21</a><br>\
–American Robin<br>\
–European Starling<br>\
–House Sparrow<br>")

var cobbs_hill_2021 = L.marker([43.13732757335792, -77.57145235465927], {icon: birdIcon}).addTo(map);
cobbs_hill_2021.bindPopup("<a href ='https://drive.google.com/drive/folders/12zdGx0pu0nN55ggsnzRC0V5Dh8-QgY-Y?usp=sharing' target='_blank'>Cobbs Hill: 6.4.21</a><br>\
–Mallards<br>\
–Red-Winged Blackbird<br>")

var black_creek_2021 = L.marker([43.09485785129654, -77.68124600461128], {icon: birdIcon}).addTo(map);
black_creek_2021.bindPopup("<a href ='https://drive.google.com/drive/folders/18limVvwYwOj1svYDbk7aul4PePI40sSv?usp=sharing' target='_blank'>Black Creek: 6.5.21</a><br>\
–Eastern Bluebird<br>\
–Great Blue Heron<br>\
–Northern Waterthrush<br>\
–Osprey<br>")

var braddock_bay_2021 = L.marker([43.304826723098536, -77.71696161456059], {icon: birdIcon}).addTo(map);
braddock_bay_2021.bindPopup("<a href ='https://drive.google.com/drive/folders/1kQboL7XA6QF2wETZpazgN_yiEvAq1mek?usp=sharing' target='_blank'>Braddock Bay: 6.7.21</a><br>\
–Barn Swallow<br>\
–Black-Capped Chickadee<br>\
–Mute Swan<br>")

var mendonPonds_fairy_birdsong_2021 = L.marker([43.02308300681513, -77.58311011127753], {icon: birdIcon}).addTo(map);
mendonPonds_fairy_birdsong_2021.bindPopup("<a href ='https://drive.google.com/drive/folders/1HDp_eh4e87LLkSChz00K4-AjLV4XaVn6?usp=sharing' target='_blank'>Mendon Ponds, Fairy Birdsong: 6.16.21</a><br>\
–American Goldfinch<br>\
–Eastern Bluebird<br>\
–Indigo Bunting<br>\
–Red-Bellied Woodpecker<br>")

var eastHampton_2021 = L.marker([41.578519579645516, -72.49217008429353], {icon: birdIcon}).addTo(map);
eastHampton_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1EGC_THitiy0gz8K7djy7gcl4AQEU2uTP?usp=sharing' target='_blank'>East Hampton: 6.18.21</a><br>\
–Eastern Phoebe<br>\
–Eastern Wood-Pewee<br>\
–Red-Shouldered Hawk<br>\
–House Finch<br>")

var paris_2021 = L.marker([48.85786330891968, 2.3461146023504362], {icon: birdIcon}).addTo(map);
paris_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1DPJd-cV1Arv5nbglfZnFuhTLaWyJJmeO?usp=sharing' target='_blank'>Paris: 6.24.21</a><br>\
–Magpie<br>\
–Rose-Ringed Parakeet<br>")

var bois_de_boulogne_2021 = L.marker([48.862326382948325, 2.2490010839792314], {icon: birdIcon}).addTo(map);
bois_de_boulogne_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1m3mBuWg6trD1LJWD80-j5udqity3KEuh?usp=sharing' target='_blank'>Bois de Boulogne: 6.27.21</a><br>\
–Eurasian Jays<br>\
–Eurasian Robin<br>\
–Gray Heron (Eating!)<br>")

var metz_2021 = L.marker([49.12167206308836, 6.165851634683215], {icon: birdIcon}).addTo(map);
metz_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1njlG6_lmbb1kth9gid3NOi0f08WUMZoK?usp=sharing' target='_blank'>Metz: 7.1.21</a><br>\
–Eurasian Jackdaw<br>\
–Eurasian Moorhen<br>\
–White Wagtail<br>")

var luxembourg_2021 = L.marker([49.611025419045404, 6.129832384730395], {icon: birdIcon}).addTo(map);
luxembourg_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1TDugW7HoEK0zoTnLs4e0r_mmIiQ_Yaoo?usp=sharing' target='_blank'>Luxembourg: 7.3.21</a><br>\
–Gray Heron<br>\
–Eurasian Blackbird<br>\
–The Ever Majestic Rock Dove<br>")

var strasbourg_2021 = L.marker([48.580642302980884, 7.741834462244451], {icon: birdIcon}).addTo(map);
strasbourg_2021.bindPopup("<a href='https://drive.google.com/drive/folders/11uzPzOX0ZPOnx_MhzacI5jG_bBnf6f-u?usp=sharing' target='_blank'>Strasbourg: 7.5.21</a><br>\
–Egyptian Goose<br>\
–Eurasian Coot<br>")

var marySmokies_2021 = L.marker([35.61262621512952, -83.55385066029562], {icon: birdIcon}).addTo(map);
marySmokies_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1uD9SOipcln-YHNNjpEz7vr4GTO9YPDsI?usp=sharing' target='_blank'>Maryville and Great Smokies: 7.16.21</a><br>\
–Green Heron<br>\
–Hairy Woodpecker<br>\
–Norther Parula<br>\
–Scarlet Tanager<br>")

var orlando7_2021 = L.marker([28.539011572593626, -81.38725171204213], {icon: birdIcon}).addTo(map);
orlando7_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1iKC2ZYf5-FLwsZiS4rOwgH2o_frsAcpD?usp=sharing' target='_blank'>Orlando Birds: 7.20.21</a><br>\
–Anhinga<br>\
–Boat-Tailed Grackle<br>\
–Limpkin<br>\
–Little-blue heron<br>")

var montezuma7_2021 = L.marker([42.96270294171564, -76.74100114320504], {icon: birdIcon}).addTo(map);
montezuma7_2021.bindPopup("<a href='https://drive.google.com/drive/folders/18jEp2R5HOyjCZ88AHRDtfDDsKR34q1_H?usp=sharing' target='_blank'>Montezuma: 7.29.21</a><br>\
–Caspian Terns<br>\
–Eastern Kingbird<br>\
–Great Egret<br>")

var irondequoit_bay8_2021 = L.marker([43.18577728031273, -77.52938320653942], {icon: birdIcon}).addTo(map);
irondequoit_bay8_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1y8gSFWiXZsUed9FpRj-4WxZMEg-DBKLz?usp=sharing' target='_blank'>Irondequoit Bay: 8.3.21</a><br>\
–Blue Jay<br>\
–Cedar Waxwing<br>")

var lucien_morin_2021 = L.marker([43.18577728031273, -77.52938320653942], {icon: birdIcon}).addTo(map);
lucien_morin_2021.bindPopup("<a href='https://drive.google.com/drive/folders/19QpkQb29yoq9abWAjIJM0jyQodJQbmA6?usp=sharing' target='_blank'>Lucien Morin: 8.4.21</a><br>\
–Swamp Sparrow<br>")

var mendon_ponds_100_pond_2021 = L.marker(43.029412663961764, -77.563435355396, {icon: birdIcon}).addTo(map);
mendon_ponds_100_pond_2021.bindPopup("<a href='https://drive.google.com/drive/folders/1WANamqw3n-U7EnYB65ksySY2sn7whJRA?usp=sharing' target='_blank'>Mendon Ponds, 100-Acre Pond: 8.5.21</a><br>\
–Cedar Waxwing<br>")

