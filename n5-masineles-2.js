/*
8 masinos su savybem:
pavadinimas
kelias
greitis
 
vyksta lenktyes (ciklas):
kiekvieno ciklo metu kiekviena masina pakeicia savo greiti random (-5..5) km
atbuliniu masina vaziuot negali
kiekvieno ciklo metu kiekviena masina pavaziuoja per tiek, koks yra jos greitis
 
lenktynes baigiasi, kai bent viena masina nuvaziuoja 1000 km
 
pabaigoj atspausdinam visa turnyrine lentele isrusiuota pagal nuvaziuota kelia
 
*)komentatorius
*/


var masinytes = [
    {pavadinimas: 'Pirma', kelias: 0, greitis: 0},
    {pavadinimas: 'Antra', kelias: 0, greitis: 0},
    {pavadinimas: 'Trečia', kelias: 0, greitis: 0},
    {pavadinimas: 'Ketvirta', kelias: 0, greitis: 0},
    {pavadinimas: 'Penkta', kelias: 0, greitis: 0},
    {pavadinimas: 'Šešta', kelias: 0, greitis: 0},
    {pavadinimas: 'Septinta', kelias: 0, greitis: 0},
    {pavadinimas: 'Aštunta', kelias: 0, greitis: 0}
];
// console.log(masinytes[3]);


var mLength = masinytes.length;
var maxkm = 0;
var k = 1;
// var maxAtstumas = 0;

while (masinytes[maxkm].kelias < 1000) {
    var maxkm = 0;
    for (var i = 0; i < mLength; i++) {
        greicioPokytis = Math.trunc(Math.random() * 5 + 1);
        if (Math.random() <= 0.5) {
            greicioPokytis *= -1
        }

        if (masinytes[i].greitis + greicioPokytis < 0) {
            masinytes[i].greitis = 0;
        } else {
            masinytes[i].greitis += greicioPokytis;
        }
        
        masinytes[i].kelias += masinytes[i].greitis

        if (masinytes[i].kelias > masinytes[maxkm].kelias) {
            maxkm = i;
        }
// console.log(masinytes[i].kelias, masinytes[i].greitis);
    }
// console.log(' ------- CIKLAS -------');
// console.log(masinytes);
    if (masinytes[maxkm].kelias / 100 >= k) {
        console.log(` -------------- ${100 * k} KM RUOŽE PIRMAUJA: --------------`);
        console.log(`Lyderiauja mašina ${masinytes[maxkm].pavadinimas} ir ji nuvažiavo: ${masinytes[maxkm].kelias} km.\n`);
        k++
    }
    // console.log(masinytes);
    // console.log(masinytes[maxkm]);    
}
// console.log(`\n\nFINALINIAI REZULTATAI:\n`);
// for (var i = 0; i < mLength; i++) {
//     console.log(`Mainytė ${masinytes[i].pavadinimas} nuvažiavo: ${masinytes[i].kelias} km`);
// }

let dezute;
let skLength = masinytes.length;

for (var i = 0; i < skLength; i++) {
    max = i;
    for (var j = i + 1; j < skLength; j++) {
        if(masinytes[j].kelias > masinytes[max].kelias) {
            dezute = masinytes[max];
            masinytes[max] = masinytes[j];
            masinytes[j] = dezute;
        }
    }
}

console.log(`\n\nFINALINIAI REZULTATAI:\n`);
console.log(masinytes);
