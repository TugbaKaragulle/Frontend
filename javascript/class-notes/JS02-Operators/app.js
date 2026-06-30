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

let num1 = 1.379243
let num2 = 1.8

console.log(Math.floor(num1)); //1
console.log(Math.floor(num2));//1

console.log(Math.ceil(num1));//2
console.log(Math.ceil(num2));//2

console.log(Math.trunc(num1));//1
console.log(Math.trunc(num2));//1

console.log(Math.round(num1));//1
console.log(Math.round(num2));//2

console.log(num1.toFixed(2));//1.38 --> 1.379243 aslinda sayi bu ama bu da ondalikli kismi yakin olana yuvarliyor.

//RANDOM: rastgele
// es wird genutzt, um eine Zufallszahl zwischen 0 und 1 zu erzeugen
// Erzeugt eine Zufallszahl zwischen 0 und 1.

console.log(Math.ceil(Math.random()*100))

console.clear();

//* ARTIRMA
 let a = 5
 a++
 console.log(a); //6

 let b = 8
 console.log(b++); // yine 8 görürüm. (Önce yazdirir sonra artirir. Bir sonraki satirda sonuc görülür)

 let c = a++ // önce atama yapar sonra artirir. a yukarida 6 idi
 console.log(c); //6
 console.log(a); //7 // sonnra arttigi icin 7 oldu.

 let d = 9
 console.log(++d); // ++ solda olursa önce artirir sonra yazdirir. -->10

 //? d'yi yukaridaki console icinde arttirdik, bir seye atamis olmasak da degeri otomatik console icinde artar.

 let e = ++d
 console.log(e); //11
 console.log(d); //11

 //* AZALTMA

 console.log(d--); //11
 console.log(d); // 10

 //! SAYIYI 5 ILE CARP

 let zahl = 4
 zahl*=5

 console.log(zahl); //20

 //! SAYIdDAN 5 CIKAR

 zahl-=5;
 console.log(zahl); //15

 //! SAYIYI 5 ILE BÖL

 zahl/=5;
 console.log(zahl); //3

 //! SAYININ KALANINI BUL (MOD)

 zahl = zahl%2
 console.log(zahl); //1

 // CARPMA VE ÜS ALMA

 //dairenin alani icin pi ile yaricapin karesini bulucaz

 const PI = 3.14
 const yaricap = 5

 console.log(PI*yaricap**2); //78.5
 console.log(PI*Math.pow(yaricap,2)); //78.5 // Dairenin alanini hesaplamis olduk

 //Math.pow() class ile sayinin karesini ya da küpünü alir. Yani üssünü hesaplar
 //DE: // Math.pow(); //* Berechnet die Quadrat-, Kubik- oder allgemein die Potenz  einer Zahl.

 //*sayinin karekökünü alma //DE: Berechnet die Quadratwurzel einer Zahl.

 console.log(144**(1/2)); //12
  //Best Practice with Method

  console.log(Math.sqrt(144));

  console.clean


  //************ MODULUS ***********

  // ? Frage: Berechne die Summe der Einer-, Zehner- und Hunderterstelle einer Zahl

const number = 456
let sum = 0
const einer = number%10
const zehner = Math.trunc((number/10)%10)
const hunderter = Math.trunc(number/100)
console.log("Die Einerstelle = "+ einer);
console.log("Die Zehnerstelle = "+ zehner);
console.log("Die Hunderterstelle = "+hunderter);
sum = einer+zehner+hunderter
console.log(sum); //15

//! GENEL KÜLTÜR 
console.log(Number("0x11")); // x=hexa 16'lik taban = 17
console.log(Number("0b101")); // b=binary 2'lik taban = 5
console.log(Number("0o11")); // o=octal 8'lik taban = 9


  
  


  
  














  
 
 
 


 


 
 


 
 
 
 
 







