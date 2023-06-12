$(document).ready(function () {
    const $popup = $(".popup");
    // When resume button is clicked, show the language popup
    $("#resume").on("click", function () {
        $("#languagePopup").fadeIn();
    });

    // Show English PDF file in a new tab on English button click
    $("#english-button").on("click", function () {
        window.open("https://evelinabisell.github.io/Resumes/CV_Resume_Eng_June_2023.pdf");
    });

    // Show Swedish PDF file in a new tab on Swedish button click
    $("#swedish-button").on("click", function () {
        window.open("https://evelinabisell.github.io/Resumes/CV_Sve_June_2023.pdf");
    });

    // Close the popup when user clicks outside the content area
    $(document).mouseup(function (e) {
        if (!$popup.is(e.target) && $popup.has(e.target).length === 0) {
            $("#languagePopup").fadeOut();
        }
    });

    // Handle form submissions
    $('#mail-form').submit(function (event) {
        event.preventDefault();
        var form = $(this);
        var status = $('#form-status');
        var formData = new FormData(form[0]);

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                status.html('Thanks for your message!');
                form[0].reset();
            },
            error: function (xhr, status, error) {
                var errorMessage = "Oops! There was a problem sending your message";
                if (xhr.responseJSON && xhr.responseJSON.errors) {
                    errorMessage = xhr.responseJSON.errors.map(function (error) {
                        return error.message;
                    }).join(", ");
                }
                status.html(errorMessage);
            }
        });
    });
});
