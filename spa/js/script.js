document.querySelector("#zoekenKnop").addEventListener("click", toonZoekbalk);
document.querySelector("#zoekenSluiten").addEventListener("click", sluitZoekbalk);

function toonZoekbalk() {
    document.querySelector(".zoekbalk").style.display = "block";
    document.querySelector(".zoekbalk").classList.remove("zoekbalkAnimatieSluiten");
    document.querySelector(".zoekbalk").classList.add("zoekbalkAnimatie");
};

let extraZoeken = document.querySelector("#extraZoeken");
extraZoeken.addEventListener("click", sluitZoekbalk);
extraZoeken.addEventListener("click", scrollFunctie);


document.querySelector("#zoekVeld").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        sluitZoekbalk();
        scrollFunctie();
    }
});

function sluitZoekbalk() {
    document.querySelector(".zoekbalk").classList.add("zoekbalkAnimatieSluiten");
    document.querySelector(".zoekbalk").classList.remove("zoekbalkAnimatie");

    setTimeout(() => {
        document.querySelector(".zoekbalk").style.display = "none";
    }, 130);
};



document.querySelector("#belKnop").addEventListener("click", openFavorieten);

function openFavorieten() {
    document.querySelector(".favorieten").classList.remove("favorietensluitenAnimatie")
    document.querySelector(".favorieten").classList.add("favorietenOpenanimatie")
}

document.querySelector("#sluitFavorieten").addEventListener("click", sluitFavorieten);

function sluitFavorieten() {
    document.querySelector(".favorieten").classList.remove("favorietenOpenanimatie")
    document.querySelector(".favorieten").classList.add("favorietensluitenAnimatie")
}



document.querySelector("#coinKnop").addEventListener("click", scrollFunctie);


function scrollFunctie() {
    document.querySelector(".cryptoInfo").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
    document.querySelector("#zoekVeld").value = '';
}



function filterOnClass(baseClass, s) {
    document.querySelector("#resultatenResetten").style.display = "block";
    let re = new RegExp(s.trim(), 'i');
    document.querySelectorAll('.' + baseClass).forEach(node => {
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

document.querySelector("#resultatenResetten").addEventListener("click", resetZoekgegevens);

function resetZoekgegevens() {
    handleCrypto();
    document.querySelector("#resultatenResetten").style.display = "none";
    document.querySelector("#zoekVeld").value = '';
}


setTimeout(() => {
    handleCrypto();
}, 2500);


async function handleCrypto() {
    const cryptoApi = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false"
        )
        .then((res) => res.json())
        .then((json) => {
            let cryptoData = json;


            let cryptoArray = [];

            console.log(cryptoArray)

            for (let i = 0; i < cryptoData.length; i++) {
                cryptoArray.push(cryptoData[i]);
            }

            let html = "";

            for (let i = 0; i < cryptoArray.length; i++) {

                html +=
                    `              
                <ul class="cryptoGegevens ${cryptoArray[i].name}" tabindex="4">
                <li><img class="cryptoLogo" src="${cryptoArray[i].image}"></li>
                <li>${cryptoArray[i].symbol}</li>
                <li><h3 class="cryptoNaam">${cryptoArray[i].name}</h3></li>
                <li>Price:</li>
                <li>&#8364 ${cryptoArray[i].current_price}</li>
                <li>Market cap:</li>
                <li>&#8364 ${cryptoArray[i].market_cap}</li>
                <li>Change:</li>
                <li>${cryptoArray[i].price_change_percentage_24h} %</li>
                <li>Last update:</li>
                <li>${cryptoArray[i].last_updated}</li>
                <li class="sluiten"><i class="fa-solid fa-xmark"></i></li>
                </ul>  
                `;
            }


            html += ""
            document.querySelector(".cryptoInfo").innerHTML = html



            let cryptoLijst = document.querySelector('.cryptoInfo').children;

            for (let i = 0; i < cryptoLijst.length; i++) {

                cryptoLijst[i].addEventListener("click", toggleCrypto);

                function toggleCrypto() {
                    console.log(cryptoArray[i].name);
                    cryptoLijst[i].classList.toggle("cryptoPagina")
                }
            }
        });

    document.querySelector(".emptyState").style.display = "none";
}
