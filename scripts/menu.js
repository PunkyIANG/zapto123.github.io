var items;

function menuLoad() {
    items = document.getElementsByClassName("menuitems");
    for (var i = 0; i < items.length; i++) {
        items.item(i).style.display = "none";
        items.item(i).addEventListener("click", switchMenu);
    }
}

function switchMenu() {
    for (var i = 0; i < items.length; i++) {
        if (items.item(i).style.display == "none") {
            items.item(i).style.display = "block";
        } else {
            items.item(i).style.display = "none";
        }
    }
}
