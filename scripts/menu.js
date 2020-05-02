var items;

function menuLoad() {
    items = document.getElementsByClassName("menuitems");
    for (var i = 0; i < items.length; i++) {
        items.item(i).style.display = "none";
        items.item(i).addEventListener("click", switchMenu);
        console.log("off");
    }
}

function switchMenu() {
    for (var i = 0; i < items.length; i++) {
        if (items.item(i).style.display == "none") {
            items.item(i).style.display = "block";
            console.log("on");
        } else {
            items.item(i).style.display = "none";
            console.log("off");
        }
    }
}
