'use strict';
//var kaja ={
//    imie: "Kaja",
//    wzrostst: 153,
//    przedstawOsobe: function(){console.log(this.imie)}
//}
//
//var krystian ={
//    imie: "Krystian",
//    wzrostst: 183,
//    przedstawOsobe: function(){console.log(this.imie)}
//}
//kaja.przedstawOsobe();
//krystian.przedstawOsobe();
//console.log(kaja);
class Osoba {
    constructor(imie,nazwisko,height){
        this.imie = imie;
        this.nazwisko =nazwisko;
        this.wzrost =height;
    }
    wyswietlInfo() {
        console.log( "Imię: " + this.imie + ", " + "Nazwisko: " + this.nazwisko +",Oczy:" +this.wzrost);
    }
}



var krystian = new Osoba('Krystian','Dziopa',158);

var kaja = new Osoba('Kaja','Brzęszczykiewicz',250);
console.log(krystian);
console.log(kaja);


kaja.wyswietlInfo();
krystian.wyswietlInfo();

