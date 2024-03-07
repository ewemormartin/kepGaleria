import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria")[0];
console.log(galeriaELEM)
/* írd bele az összeálíltott html képsorozatot */
galeriaELEM.innerHTML = htmlOsszeAllit(KEPEK);

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepIMG = document.getElementById("heloka");
/* A .nagykep div megfogása */

const nagykepDIV = document.getElementsByClassName("nagykep")

/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kisKEPELEM = document.querySelectorAll(".kep")
for (let index = 0; index < kisKEPELEM.length; index++) {
    kisKEPELEM[index].addEventListener("click", function katt(event){
        console.log(event.target.src)
        nagykepIMG.src = event.target.src
    })
}
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép 
src attribútumában megadott elérési útvonalra  */

const jobbGOMB = document.querySelector("jobb")
jobbGOMB.addEventListener("click",jobbra)

function jobbra(){
    aktIndex++;

    if (aktIndex>=KEPEK.length) {
        aktIndex=0
    }
    console.log(aktIndex)
    console.log(KEPEK[aktIndex].kep)
    nagykepIMG.src = KEPEK[aktIndex].kep
}


/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */



