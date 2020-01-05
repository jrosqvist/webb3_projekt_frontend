/* Joakim Rosqvist - Mittuniversitetet - 2019 */
"use strict";

// Lägger webbtjänst-adressen i en variabel
const URL = "http://localhost/projekt_w3_backend/educationlist.php/education/";

// Funktion som hämtar utbildningsposterna från webbtjänsten
function getEducation() {
    // Håmtar kurser från URL:en
    fetch(URL)
        // Konverterar till JSON
        .then((res) => res.json())
        .then((data) => {
            let educationListing = "";
            // Loopar igenom datat och skriver ut alla poster
            data.forEach(function (post) {
                educationListing += "<div class = 'education-box'><p>" + post.hie + "</p>"
                    + "<p>" + post.name + "</p>"
                    + "<p>" + post.credits + "</p>"
                    + "<p>" + post.startdate + "</p>"
                    + "<p>" + post.enddate + "</p></div>";
            })
            // Lägger in all text i diven output
            document.getElementById("education-listing").innerHTML = educationListing;
        })
        // Plockar upp felmeddelanden
        .catch((err) => console.log(err))
}
