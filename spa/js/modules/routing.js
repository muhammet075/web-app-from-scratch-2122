import { Routie } from "./vendor/routie.js";
import { handleCrypto } from "./dataOphalen.js"
import { toonAbout } from "./about.js";
import { toonZoekbalk } from "./zoeken.js"
import { openFavorieten } from "./favorieten.js"
import { scrollFunctie } from "./scrollen.js"

export function routieRoutes() {
    
    routie({
        
        "about": () => {
            toonAbout();
        },
        
        "search": () => {
            toonZoekbalk();
        },
        
        "favorite": () => {
            openFavorieten();
        },
        
        "coins": () => {
            scrollFunctie();
        },
        
        //"/:Bitcoin": () => {
          //voegClasstoe();
            //console.log("test")
        //},        
    })
};