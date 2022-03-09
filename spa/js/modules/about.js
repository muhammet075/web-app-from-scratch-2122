//About openen
export function toonAbout(){
    document.querySelector(".aboutPage").classList.remove("aboutsluitenAnimatie")
    document.querySelector(".aboutPage").classList.add("aboutOpenanimatie")
};

//About sluiten
export function sluitAbout(){
    document.querySelector(".aboutPage").classList.remove("aboutOpenanimatie")
    document.querySelector(".aboutPage").classList.add("aboutsluitenAnimatie")
};