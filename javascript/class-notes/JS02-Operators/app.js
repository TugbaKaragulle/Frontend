//* ARITMETIK OPERATÖRLER //*

const cola = 50
const cips = 55
const eiscream = 100
console.log(cola+cips+eiscream);

//BEST PRACTICE
let summe = cola+cips+eiscream
console.log(summe);

// Erhöhe die Summe um 1
summe++
console.log(summe); //206
summe+=10;
console.log(summe); //216

//Verringere die Summe um 1
summe--
console.log(summe); //215
summe-=5;
console.log(summe); //210

const name= "Tugba"
const nachname= "Kara"

console.log("My name ist ="+" "+name+" "+nachname);

//! Backtick (tamplate literals) ``

console.log(`My name ist = ${name} ${nachname}`);

//? Einige Funktionen

//Math.floor(); //* her zaman en yakin alt tam sayiya yuvarlar 
//DE: Rundet immer auf die nächstkleinere ganze Zahl ab.

//Math.ceil(); //* her zaman en yakin üst tam sayiya yuvarlar
//DE: Rundet immer auf die nächstgrößere ganze Zahl auf.

//Math.trunc(); //* sayinin tam kismini alir.
//DE: Gibt den ganzzahligen Teil einer Zahl zurück.

//Math.round(); //* en yakin tam sayiya yuvarlar.
//DE: Rundet auf die nächste ganze Zahl.

//Math.random(); //* 0 ve 1 arasinda rastgele sayi üretir.
//DE: Erzeugt eine Zufallszahl zwischen 0 und 1.

//toFixed(x) //* virgülden sonra x adet basamak birak
//DE: Gibt x Nachkommastellen aus.


