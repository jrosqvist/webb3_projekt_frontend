/* Joakim Rosqvist - Mittuniversitetet - 2019 */
"use strict";

// Lägger webbtjänst-adressen i en variabel
const WEBPAGEURL = "http://localhost/projekt_w3_backend/webpagelist.php/webpages/";

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
                webpageListing += "<div class = 'webpage-box'><p>"
                    + "<p>" + post.title + "</p>"
                    + "<p>" + post.url + "</p>"
                    + "<p>" + post.description + "</p></div>";
            })
            // Lägger in all text i den rätta diven
            document.getElementById("webpage-listing").innerHTML = webpageListing;
        })
        // Plockar upp felmeddelanden
        .catch((err) => console.log(err))
}




