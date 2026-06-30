//! ********************** DEGISKEN TANIMLAMA**************************
//! ********************** VARIABLEN DEKLARIEREN **********************

// CONST ve LET, ECMASCRIPT6 ile gelmistir. Var eski versiyonlardan beri bulunmaktadir.

//************************************ CONST ********************************
//? const ve let Modern JS ile gelmis yeni degisken tanimlama keyworleridir.
//! CONST: Sadece baslangicta deger atanabilir.
//! Sonradan degeri degistirilemez ( non-primitive'ler (array...) haric).

const variblenName = "javascript"
console.log(variblenName)
const sayi= 7
// sayi = 8; --> Da eine const-Variable nicht geändert werden kann, tritt in dieser Zeile ein Fehler auf.

console.log(sayi)

const daten = true
console.log(typeof variblenName, typeof sayi, typeof daten)

//************************************ LET ********************************
//? LET de Const gibi yaygin kullanilan degisken tanimlama yöntemidir.
//! Const'dan farki, sadece tanimlama kisminda degil istenildigi zaman degeri degistirilebilir.
//* CONST gibi tanimlandigi blok icersinde gecerlidir. Baska yerlerden erisilemez. (Block-Scoped)
//? CONST kullanamadigimiz durumlarda (degiskenin degeri sürekli degisecekse) LET kullanmaliyiz.

let sprache= "javascript"
sprache = "java"
console.log(sprache) // var olan sprache'ye yeni deger atayabildik. //Wir konnten der bereits vorhandenen Variable einen neuen Wert zuweisen.

let zahl1 =23
let zahl2="56"
zahl1 = 100

//! Bir String ile sayiyi yan yana bu sekilde toplayamayiz!!

console.log(zahl1+zahl2) // 10056 --> dataType farki oldugundan toplamaz yan yana getirir. (Concatenation)

console.log(zahl1-zahl2, zahl1*zahl2, zahl1/zahl2) // 44 5600 1.7857142857142858 --> Ancak dataType farkli olsa da bu islemleri yapiyor. (Javada olsa alti kirmizi cizerdi)

//!Farkli data tiplerini toplamanin birinci yolu :
console.log(zahl1+Number(zahl2)) // --> 156 (Typkonvertierung Type conversion (tip dönüşümü) --> Auf diese Weise funktioniert die Addition auch bei unterschiedlichen Datentypen.
//!Farkli data tiplerini toplamanin ikinci yolu :
console.log(zahl1+(+zahl2)) // --> 156

//!Farkli data tiplerini toplamanin ücüncü yolu :
console.log(zahl1 + parseInt(zahl2)); //--> 156 --> Burada Integer'a pars ettik.

//************************************ VAR ********************************

//? VAR ile bir degisken tanimlandiginda LET de oldugu gibi degeri sonradan degistirilebilir.
//!VAR desgiskenleri tanimlandigi yere göre global olarak veya fonksiyon icerisinde erisilebilir.
//* - Degisken fonksiyon icerisinde tanimlandi ise ancak o fonksiyonda erisilebilir. (Function-scoped).
//? - Eger, degisken fonksiyonlarin disinda tanimlandi ise tüm her yerden erisilebilir. (Global-scoped).
//! Günümüzde programcilar global degisken gerekmedikce VAR ile degisken tanimlamayi secmemektedir.

var zahl3 = 67
zahl3 = 134
console.log(zahl3);

console.log("**************************VAR****************************************");

var first = "global"
console.log(first) //global

{
    console.log(first) //global
    first = "GLOBAL"
    console.log(first) // GLOBAL
    var second ="Duygu"
}

console.log(first) // GLOBAL //? VAR o kadar güvenliksiz ki süslü parantez icinde - disinda her yerden degistirilebilir ve ulasilabilir. // DE: VAR ist unsicher, da die Variable sowohl innerhalb als auch außerhalb von geschweiften Klammern zugänglich und veränderbar ist.
console.log(second) //Duygu
second="Elif"
console.log(second) //Elif

console.log("*****************************LET*************************************");

//? Süsülünün disinda let olusturursam süslünün icinde degistirebilirim ve disaridan erisebilirim. 

let name = "Ayla"

{
    name = "Tugba"
    console.log(name)
}

console.log(name)

// Block-Scope
//? Ama süslünün icinde let olusturursam, süslünün disinda bunu yazdiramam, degistiremem ve buna erisemem
{
    let name2 = "Selinim"
    console.log(name2)
    name2 = "Esra"
    console.log(name2)
    
}

//? Süslünün icinde let ile tanimlanan veriye disaridan erisemeyiz.
// console.log(name2) // ! --> Uncaught ReferenceError: name2 is not defined 


console.log("*****************************CONST*************************************");


//?  Const da olsa, Let de olsa orta yere yazilana herkes erisebilir. Const ama degistirilemez

    const erstName = "Kaan"
    console.log(erstName); // Kaan

    {
        console.log(erstName); //Kaan
        //? Const degeri degistirilemez
        // erstName = "Ahmet" //!--> Uncaught TypeError: Assignment to constant variable.

        const zweiterName = "Ayla"
        console.log(zweiterName); //Ayla
    }

     //? Scope icinde olustuysa scope disinda erisemem.

     console.log(zweiterName); //!--> Uncaught ReferenceError: zweiterName is not defined
    





















