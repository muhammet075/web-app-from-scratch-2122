//Huidig jaar ophalen
export function huidigJaar(){
    const jaar = new Date().getFullYear()
    document.querySelector("#huidigJaar").innerHTML = jaar;
};