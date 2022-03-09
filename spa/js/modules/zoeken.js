//module import
import { handleCrypto } from "../modules/dataOphalen.js";

//Zoekbalk tonen
export function toonZoekbalk() {
    document.querySelector(".zoekbalk").style.display = "block";
    document.querySelector(".zoekbalk").classList.remove("zoekbalkAnimatieSluiten");
    document.querySelector(".zoekbalk").classList.add("zoekbalkAnimatie");
};

//Zoekbalk sluiten
export function sluitZoekbalk() {
    document.querySelector(".zoekbalk").classList.add("zoekbalkAnimatieSluiten");
    document.querySelector(".zoekbalk").classList.remove("zoekbalkAnimatie");

    setTimeout(() => {
        document.querySelector(".zoekbalk").style.display = "none";
    }, 130);
};


//Filter zoek functie
export function filterOnClass(baseClass, s) {
    console.log("s", s);
    document.querySelector("#resultatenResetten").style.display = "block";
    let re = new RegExp(s.trim(), 'i');
    document.querySelectorAll('.' + "cryptoContainer").forEach(node => {
        let cNames = Array.from(node.classList);
        if (s.trim() == '') {
            node.style.display = "none"
        } else if (cNames.some(cName => re.test(cName))) {
            node.style.display = "block"
        } else {
            node.style.display = "none"
        }
    });
}

//Filter zoek gegevens resetten
export function resetZoekgegevens() {
    handleCrypto();
    document.querySelector("#resultatenResetten").style.display = "none";
    document.querySelector("#zoekVeld").value = '';
}