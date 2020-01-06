// Ändrar utseendet på mobil-menyknappen
$(document).ready(function(){
    $("#mobile-menu").on('click', function(){
        $(this).toggleClass("open");
    });
});

// Öppnar och stänger mobil-menyn
$(document).ready(function(){
    $("#mobile-menu").on('click', function(){
        $("#main-nav ul").toggleClass("open");
    });
});

//Stänger popupen med x-et
// Stänger uppdateringsfönstret
function closePopUp() {
    document.getElementById('pop-up').style.display = "none";
}


