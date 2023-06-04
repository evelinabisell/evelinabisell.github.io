$(document).ready(function() {
    $("#resume").on("click", function() {
      // Show the popup
      $("#languagePopup").fadeIn();
    });
  
    // Handle English button click
    $("#english-button").on("click", function() {
      // Start download of English PDF file
      window.location.href = "resumes/CV_Resume_Eng _June_2023.pdf";
    });
  
    // Handle Swedish button click
    $("#swedish-button").on("click", function() {
      // Start download of Swedish PDF file
      window.location.href = "resumes/CV_Sve_Apr_2023.pdf";
    });
  
    // Close the popup when clicked outside the content area
    $(document).mouseup(function(e) {
      var popup = $(".popup");
      if (!popup.is(e.target) && popup.has(e.target).length === 0) {
        $("#languagePopup").fadeOut();
      }
    });
  });
