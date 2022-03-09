//modules import
import { handleCrypto } from "./modules/dataOphalen.js";
import { scrollFunctie } from "./modules/scrollen.js";
import { toonZoekbalk, sluitZoekbalk, filterOnClass, resetZoekgegevens } from "./modules/zoeken.js";
import { toonAbout, sluitAbout } from "./modules/about.js";
import { openFavorieten, sluitFavorieten } from "./modules/favorieten.js";
import { huidigJaar } from "./modules/footer.js";
import { routieRoutes } from "./modules/routing.js";


//routie
routieRoutes();


//data ophalen met vertraging voor de loading state
setTimeout(() => {
    handleCrypto();
}, 2500);


//huidig jaar ophalen voor de footer copyright
huidigJaar();


//zoeken
document.querySelector("#zoekVeld").addEventListener("keyup", function () {
    console.log("onkeyup ", this.value);
    filterOnClass('cryptoGegevens', this.value)
});


//buttons
document.querySelector("#zoekenKnop").addEventListener("click", toonZoekbalk);
document.querySelector("#zoekenSluiten").addEventListener("click", sluitZoekbalk);
document.querySelector("#extraZoeken").addEventListener("click", sluitZoekbalk);
document.querySelector("#extraZoeken").addEventListener("click", scrollFunctie);
document.querySelector("#openAbout").addEventListener("click", toonAbout);
document.querySelector("#sluitAbout").addEventListener("click", sluitAbout);
document.querySelector("#resultatenResetten").addEventListener("click", resetZoekgegevens);
document.querySelector("#belKnop").addEventListener("click", openFavorieten);
document.querySelector("#sluitFavorieten").addEventListener("click", sluitFavorieten);
document.querySelector("#coinKnop").addEventListener("click", scrollFunctie);