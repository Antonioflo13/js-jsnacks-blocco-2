// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var biciclette = [

    biciletta1 = {
        nome: "Tarmac SL7",
        peso: 120
    },
    biciletta2 = {
        nome: "Wilier Filante SLR",
        peso: 130
    },
    biciletta3 = {
        nome: "Argon 18 Gallium Pro Disc",
        peso: 20
    }

];

pesoBiciclette = [];
for (i=0; i < biciclette.length; i++) {
    pesoBiciclette.push(biciclette[i].peso);
    pesoBiciclette.sort();
    if (pesoBiciclette[0] == biciclette[i].peso) {
        console.log(biciclette[i]);
    }
}




