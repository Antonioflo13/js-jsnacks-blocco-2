// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var biciclette = [

    biciletta1 = {
        nome: "Tarmac SL7",
        peso: 800
    },
    biciletta2 = {
        nome: "Wilier Filante SLR",
        peso: 870
    },
    biciletta3 = {
        nome: "Argon 18 Gallium Pro Disc",
        peso: 760
    }

];

pesoBiciclette = [];
for (i=0; i < biciclette.length; i++) {
    pesoBiciclette.push(biciclette[i].peso);
    pesoBiciclette.sort();
}

console.log(pesoBiciclette[0]);


