/* Emmeline's code starts here */

//Create a function that displays media selection options on preferences page

function showMedia() {
    media_options = document.getElementById('media_dd');
    media_options.style.display = "flex";
}

//Kill buttons once they are clicked
function grayOut(elementName) {
    eName = document.getElementById(elementName);
    eName.style.backgroundColor = "gray";
    eName.style.pointerEvents = "none";
}

/* Emmeline's code ends here */