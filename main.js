// Dark Light Theme
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark") {
    darkMode();
}else {
    lightMode();
}

themeBtn.addEventListener("click",(e)  => {
    if(localStorage.getItem("mode") == "light") {
        darkMode();
    }else {
        lightMode();
    }
})


function darkMode() {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "light");
}