// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
let kmTratta = prompt("quanti km devi percorrere?");
console.log ("km", kmTratta);

let age = parseInt(prompt("quanti anni hai?"));
console.log ("anni", age);

// Prezzo biglietto pr km
let priceKm = 0.21;
console.log ("prezzo x km", priceKm);

let priceTicket = kmTratta * priceKm
console.log ("prezzo biglietto", priceTicket);



// sconti
let discountUn18 = priceTicket * 0.8;
console.log ("prezzo in caso di sconto 20 ", discountUn18)

let discountOv65 = priceTicket * 0.6;
console.log ("prezzo in caso di sconto 40 ", discountOv65)

// prezzo finale
let finalPriceTicket

if(age < 18){
    finalPriceTicket = discountUn18;
} else if(age > 65) {
    finalPriceTicket = discountOv65
}else {
    finalPriceTicket = priceTicket
}

finalPriceTicketRounded = Math.round((finalPriceTicket + Number.EPSILON) * 100) / 100;

// stampa
document.getElementById("mio").innerHTML = "il costo per il tuo viaggio &egrave;&colon;" + finalPriceTicketRounded

