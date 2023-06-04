$(document).ready(function () {
    const $popup = $(".popup");
    // When resume button is clicked, show the language popup
    $("#resume").on("click", function () {
        $("#languagePopup").fadeIn();
    });

    // Show English PDF file in new tab on English button click
    $("#english-button").on("click", function () {
        window.open("Resumes/CV_Resume_Eng _June_2023.pdf");
    });

    // Show Swedish PDF file in new tab on Swedish button click
    $("#swedish-button").on("click", function () {
        window.open("Resumes/CV_Sve_Apr_2023.pdf");
    });

    // Close the popup when user clicks outside the content area
    $(document).mouseup(function (e) {
        if (!$popup.is(e.target) && $popup.has(e.target).length === 0) {
            $("#languagePopup").fadeOut();
        }
    });
});
