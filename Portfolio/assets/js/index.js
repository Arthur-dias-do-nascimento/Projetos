const header = document.querySelector("header")
const btn_top = document.querySelector(".icon-btn-top")
const itens_link = document.querySelectorAll(".nav-link")
const icon_menu = document.querySelector(".button-icon")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
        header.classList.add("active")
        btn_top.style.display = "flex"
    } else {
        header.classList.remove("active")
        btn_top.style.display = "none"
    }
})

icon_menu.addEventListener("click", () => {
    const mobile_menu = document.querySelector(".mobile-menu")
    const icon = document.querySelector("#icon")
    
    if (mobile_menu.classList.contains("open")) {
        mobile_menu.classList.remove("open")
        icon.classList = "fa-solid fa-bars fa-fw"
    } else {
        mobile_menu.classList.add("open")
        icon.classList = "fa-regular fa-x fa-fw"
    }
})