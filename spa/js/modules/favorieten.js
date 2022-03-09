//Favorieren openen
export function openFavorieten() {
    document.querySelector(".favorieten").classList.remove("favorietensluitenAnimatie")
    document.querySelector(".favorieten").classList.add("favorietenOpenanimatie")
}

//Favorieten sluiten
export function sluitFavorieten() {
    document.querySelector(".favorieten").classList.remove("favorietenOpenanimatie")
    document.querySelector(".favorieten").classList.add("favorietensluitenAnimatie")
}