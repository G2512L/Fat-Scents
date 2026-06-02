const navBar = document.getElementById("navBar");
const navbarBTN = document.getElementById("navbarBTN");
const navOverlay = document.getElementById("navOverlay");
const body = document.body;

function toggleNavbar() {
    const isVisible = navBar.style.display === "flex";

    if (isVisible) {
        navBar.style.display = "none";
        body.classList.remove("no-scroll");
    } else {
        navBar.style.display = "flex";
        body.classList.add("no-scroll");
    }
}

function closeNavbar() {
    navBar.style.display = "none";
    body.classList.remove("no-scroll");
}

navbarBTN.addEventListener("click", toggleNavbar);
navOverlay.onclick = closeNavbar;