function openMenu() {
var slideMenu = document.getElementById("menu-wrapper");
    if (slideMenu.style.width === "100%") {
        slideMenu.style.width = "0";
    } else {
        slideMenu.style.width = "100%";
    }
}

function closeMenu() {
var slideMenu = document.getElementById("menu-wrapper");
    if (slideMenu.style.width === "0") {
        slideMenu.style.width = "100%";
    } else {
        slideMenu.style.width = "0";

    }
}


