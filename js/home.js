/* ------------------------------- start toggle menu ------------------------------ */
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onlcick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle('open');
}
/* ----------------------------- end toggle menu ---------------------------- */