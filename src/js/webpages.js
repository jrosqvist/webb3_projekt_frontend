/* Joakim Rosqvist - Mittuniversitetet - 2019 */
"use strict";

// Lägger webbtjänst-adressen i en variabel
const WEBPAGEURL = "https://studenter.miun.se/~joro1803/dt173g/projekt/backend/webpagelist.php/webpages/";

// Funktion som hämtar webbplatserna från webbtjänsten
function getWebpages() {
    // Håmtar jobb från URL:en
    fetch(WEBPAGEURL)
        // Konverterar till JSON
        .then((res) => res.json())
        .then((data) => {
            let webpageListing = "";
            // Loopar igenom datat och skriver ut alla kurser
            data.forEach(function (post) {
                webpageListing += "<div class = 'webpage-box'>"
                    + "<h4>" + post.title + "</h4>"
                    + "<a href='" + post.url + "'target='_blank'><div class='webpage-picture'></div><div class ='pin'><i class='fab fa-apple'></i></div><div class ='foot'></div></a>"
                    + "<p class='description-p'>" + post.description + "</p></div>";
            })
            // Lägger in all text i den rätta diven
            document.getElementById("webpage-listing").innerHTML = webpageListing;
        })
        // Plockar upp felmeddelanden
        .catch((err) => console.log(err))
}




