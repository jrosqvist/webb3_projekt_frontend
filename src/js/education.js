/* Joakim Rosqvist - Mittuniversitetet - 2019 */
"use strict";

// Lägger webbtjänst-adressen i en variabel
const URL = "https://studenter.miun.se/~joro1803/dt173g/projekt/backend/educationlist.php/education/";

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
                educationListing += "<div class = 'education-box'><p><i class='fas fa-university'></i>" + post.hie + "</p>"
                    + "<p><i class='fas fa-graduation-cap'></i>" + post.name + "</p>"
                    + "<p><i class='fas fa-award'></i>" + post.credits + " hp</p>"
                    + "<p><i class='fas fa-calendar-alt'></i>" + post.startdate + "</p>"
                    + "<p><i class='fas fa-calendar-check'></i>" + post.enddate + "</p></div>";
            })
            // Lägger in all text i diven output
            document.getElementById("education-listing").innerHTML = educationListing;
        })
        // Plockar upp felmeddelanden
        .catch((err) => console.log(err))
}
