// Ändrar utseendet på mobil-menyknappen
$(document).ready(function () {
    $("#mobile-menu").on('click', function () {
        $(this).toggleClass("open");
    });
});


// Öppnar och stänger mobil-menyn
$(document).ready(function () {
    $("#mobile-menu").on('click', function () {
        $("#main-nav ul").toggleClass("open");
    });
});

// Tar bort menyn och ändrar menyknappen vid klick
$(document).ready(function () {
    $("#main-nav a").on('click', function () {
        // Körs bara om fönstret/skärmen är max 800px
        if (window.matchMedia('(max-width: 800px)').matches) {
            $("#mobile-menu").toggleClass("open");
            $("#main-nav ul").toggleClass("open");
        }

    });
});

//Stänger popupen med x-et
// Stänger uppdateringsfönstret
function closePopUp() {
    document.getElementById('pop-up').style.display = "none";
}


