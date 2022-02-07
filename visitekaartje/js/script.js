var knop = document.querySelector("#skillknop");
var popup = document.querySelector("#skills")
var sluiten = document.querySelector("#sluiten");

knop.addEventListener("click", openPopup);

function openPopup() {
    popup.classList.add("animatie");
}

sluiten.addEventListener("click", sluitPopup);

function sluitPopup() {
    popup.classList.remove("animatie");
}
