// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function ristampa (array, numPiccolo, numGrande) {
    if (numPiccolo > numGrande) {
        return alert("Il numero inserito deve essere più piccolo!");
    } 
    var nuovoArray = [];
    for (i=numPiccolo; i<=numGrande; i++) {
        nuovoArray.push(array[i]);
    }
    return nuovoArray;
}

var array = [1,2,3,4,5,6,7,9, "Luca", "Giuseppe"];
var a = 2;
var b = 9;
console.log(array);
console.log(ristampa(array, a, b));
