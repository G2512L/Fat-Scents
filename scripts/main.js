const navBar = document.getElementById("navBar");
const navbarBTN = document.getElementById("navbarBTN");
const navOverlay = document.getElementById("navOverlay");
const body = document.body;

if (navBar && navbarBTN && navOverlay) {
    function openNavbar() {
        navBar.classList.add("active");
        body.classList.add("no-scroll");
    }

    function closeNavbar() {
        navBar.classList.remove("active");
        body.classList.remove("no-scroll");
    }

    function toggleNavbar() {
        if (navBar.classList.contains("active")) {
            closeNavbar();
        } else {
            openNavbar();
        }
    }

    navbarBTN.addEventListener("click", toggleNavbar);
    navOverlay.addEventListener("click", closeNavbar);

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeNavbar();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavbar();
        }
    });
}