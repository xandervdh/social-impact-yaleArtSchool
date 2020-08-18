$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    function hideTuition() {
        var x = document.getElementById("tuition");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

// document ready
});
