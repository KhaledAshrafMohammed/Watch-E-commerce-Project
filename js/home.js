/* -------------------------------------------------------------------------- */
/*                            Home Page JavaScript                            */
/* -------------------------------------------------------------------------- */
/* ------------------------------- start toggle menu ------------------------------ */
let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

/* ----------------------------- end toggle menu ---------------------------- */
/* ----------------------------- cookie username ---------------------------- */
function getCookie(cName) {
  let documentCookies = window.document.cookie;
  let cookiesArray = documentCookies.split(";");
  let te = cookiesArray.find((ele) => {
    return ele.startsWith(cName);
  });
  return te ? te.split("=")[1] : "";
}
console.log(getCookie("username"));
if (getCookie("username")) {
  const Sign = document.getElementById("Sign In");
  const Register = document.getElementById("Register");
  Sign.remove();
  Register.remove();
} else {
  const user = document.getElementById("user");
 user.remove();
}
