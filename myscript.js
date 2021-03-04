// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

var risultato = 0;
for (var i = 1; i <= 5; i++) {

  var numero = parseInt(prompt("Inserisci un numero"));
  risultato = numero + risultato;
}

console.log(risultato);

var risultato2 = 0;
var j = 1;
while (j <= 5) {
  var numero2 = parseInt(prompt("Inserisci un numero"));
  j++
  risultato2 = numero2 + risultato2;
}
console.log(risultato2);
