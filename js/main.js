function openMenu() {
    var slideMenu = document.getElementById("menu-wrapper");
    if (slideMenu.style.display === "none") {
        slideMenu.style.display = "block";
    } else {
        slideMenu.style.display = "none";
    }
  }

function closeMenu() {
    var slideMenu = document.getElementById("menu-wrapper");
    if (slideMenu.style.display === "block") {
        slideMenu.style.display = "none";
    } else {
        slideMenu.style.display = "block";
    }
  }