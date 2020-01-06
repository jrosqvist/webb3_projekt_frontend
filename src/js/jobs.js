/* Joakim Rosqvist - Mittuniversitetet - 2019 */
"use strict";

// Lägger webbtjänst-adressen i en variabel
const JOBURL = "https://studenter.miun.se/~joro1803/dt173g/projekt/backend/joblist.php/jobs/";

// Funktion som hämtar jobben från webbtjänsten
function getJobs() {
    // Håmtar jobb från URL:en
    fetch(JOBURL)
        // Konverterar till JSON
        .then((res) => res.json())
        .then((data) => {
            let jobListing = "";
            // Loopar igenom datat och skriver ut alla kurser
            data.forEach(function (post) {
                jobListing += "<div class = 'job-box'><p><i class='fas fa-building'></i>" + post.workplace + "</p>"
                    + "<p><i class='fas fa-tools'></i>" + post.title + "</p>"
                    + "<p><i class='fas fa-calendar-alt'></i>" + post.startdate + "</p>"
                    + "<p><i class='fas fa-calendar-check'></i>" + post.enddate + "</p></div>";
            })
            // Lägger in all text i diven outputjobs
            document.getElementById("job-listing").innerHTML = jobListing;
        })
        // Plockar upp felmeddelanden
        .catch((err) => console.log(err))
}
