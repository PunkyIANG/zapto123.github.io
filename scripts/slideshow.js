var previousTrigger;

function loadSlideshow() {
    items = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < items.length; i++) {
        items.item(i).addEventListener("click", changeImg);
        items.item(i).addEventListener("mouseenter", changeImg);
    }

    window.addEventListener("resize", resizeTest);
}

function changeImg(source) {
    if (typeof source == "string") {
        source = document.getElementById(source); //adaugam posibilitatea sa chemam functia din alte obiecte
        console.log("redirected the source");
    } else {
        source = source.target;
    }

    document.getElementById("largeImg").src = source.src; //schimbam imaginea

    if (previousTrigger) previousTrigger.style.borderColor = "gray"; //schimbam culoarea border-ului

    source.style.borderColor = "#7FFFD4";

    previousTrigger = source;
}


function resizeTest() {
    console.log("resize");
}

