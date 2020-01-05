/* Joakim Rosqvist - Mittuniversitetet - 2019 */
"use strict";

// Lägger webbtjänst-adressen i en variabel
const JOBURL = "http://localhost/projekt_w3_backend/joblist.php/jobs/";

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
                jobListing += "<div class = 'job-box'><p>" + post.workplace + "</p>"
                    + "<p>" + post.title + "</p>"
                    + "<p>" + post.startdate + "</p>"
                    + "<p>" + post.enddate + "</p></div>";
            })
            // Lägger in all text i diven outputjobs
            document.getElementById("job-listing").innerHTML = jobListing;
        })
        // Plockar upp felmeddelanden
        .catch((err) => console.log(err))
}
