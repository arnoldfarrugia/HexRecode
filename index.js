// Change title on hover
// $("h1").mouseover(function () {
//     $(".hex").html("#");
//     $(".recode").html("2EC0DE");
// });

// $("h1").mouseout(function () {
//     $(".hex").html("HEX");
//     $(".recode").html("RECODE");
// });

// Create colour cards from HTML
$(".col").each(function () {
    var hexCol = $(this).text();
    $(this).css("background-color", hexCol);
});

// Copy Colour # on click
$(".col").click(function () {
    if ($(this).html() == "#COPIED") {
      return false
    } else {
        var colCode = $(this).html(); // Create a new variable with the color code
        var copiedCode = document.createElement("input"); // Create a new variable to capure the color code in an "input"
        copiedCode.value = $.trim(colCode); // Set the value of "copiedCode" to the colCode and use $trim() to remove white space
        document.body.appendChild(copiedCode); // Insert the "input" field we created to the document
        copiedCode.select(); // Select the value
        document.execCommand("copy"); // copy to clipboard
        document.body.removeChild(copiedCode); // Remove the "input" field we created from the document

        // Show "COPIED" on click to inform user that text has been copied
        var inform = $(this);
        inform.text("#COPIED");
        setTimeout(function () {
            inform.text(colCode);
        }, 700);
    }
});
