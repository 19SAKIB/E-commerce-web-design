const header = document.querySelector("header");


window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});


let menue = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menue.onclick = () => {
    menue.classList.toggle('bx-x');
    navBar.classList.toggle('open');
};

window.onscroll = () => {
    menue.classList.remove('bx-x');
    navBar.classList.remove('open');

}
