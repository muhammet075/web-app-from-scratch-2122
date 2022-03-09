//Scrollen functie
export function scrollFunctie() {
    document.querySelector(".cryptoInfo").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
    document.querySelector("#zoekVeld").value = '';
}