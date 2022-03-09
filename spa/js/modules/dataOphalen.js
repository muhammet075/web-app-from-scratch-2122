import { openFavorieten } from "../modules/favorieten.js";

//data ophalen en fetch
export async function handleCrypto() {
    const cryptoApi = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false"
        )
        .then((res) => res.json())
        .then((json) => {

            let cryptoData = json;
            let cryptoArray = [];

            console.log(cryptoArray)

            //data uit api in een array pushen
            for (let i = 0; i < cryptoData.length; i++) {
                cryptoArray.push(cryptoData[i]);
            }

            let html = "";

            //voor elke object aparte html aanmaken
            for (let i = 0; i < cryptoArray.length; i++) {

                html +=
                    ` 
                <div class="cryptoContainer ${cryptoArray[i].name}">
                <div class="cryptoGegevens ${cryptoArray[i].name}" tabindex="4">
                <a href="#${cryptoArray[i].name}">
                <ul>
                <li><img class="cryptoLogo" src="${cryptoArray[i].image}"></li>
                <li>${cryptoArray[i].symbol}</li>
                <li><h3 class="cryptoNaam">${cryptoArray[i].name}</h3></li>
                <li>Price</li>
                <li>&#8364 ${cryptoArray[i].current_price}</li>
                <li>Market cap</li>
                <li>&#8364 ${cryptoArray[i].market_cap}</li>
                <li>Change</li>
                <li class="percentageVerandering">${cryptoArray[i].price_change_percentage_24h} %</li>
                <li>Last update</li>
                <li>${cryptoArray[i].last_updated}</li>
                <li class="sluiten"><i class="fa-solid fa-xmark"></i></li>
                </ul>  
                </a>
                </div>
                <button class="cryptobutton ${cryptoArray[i].name}" value="${cryptoArray[i].name}, ${cryptoArray[i].current_price}"><i class="fa-solid fa-bell"></i></button>
                </div>
                `;
            }

            html += ""
            document.querySelector(".cryptoInfo").innerHTML = html


            //als er op een crypto geklikt wordt, wordt er een classlist getoggeld met aparte css properties
            let cryptoToggle = document.querySelectorAll(".cryptoGegevens");

            for (let i = 0; i < cryptoToggle.length; i++) {
                cryptoToggle[i].addEventListener("click", voegClasstoe);

                function voegClasstoe() {
                    cryptoToggle[i].classList.toggle("cryptoPagina")
                }
            }


            //als er op de favorietknop geklikt wordt, wordt de crypto munt aan de favorieten lijst met een aparte array toegevoegd.
            let buttons = document.querySelectorAll(".cryptobutton");

            function voegFavorietToe() {
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].addEventListener("click", favorietFunctie);

                    function favorietFunctie() {
                        let favorietArray = [];
                        favorietArray.push(buttons[i].value)
                        favorietArray.slice(0, 1)
                        document.querySelector(".favorietLijst").innerHTML = favorietArray;
                        openFavorieten()
                    }
                }
            }

            voegFavorietToe();
        });

    //na het fethcen wordt de empty state weggehaald
    document.querySelector(".emptyState").style.display = "none";
}