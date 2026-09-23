const searchBar = document.querySelector(".searchbar")
const searchIcon = document.querySelector(".search-icon")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")

const mobileThemeToggle = document.querySelector(".mobile-modes")
const themeToggle = document.querySelector(".modes")
const savedTheme = localStorage.getItem("theme")

const mobileMenu = document.querySelector(".mobile-menu")

searchIcon.addEventListener("click", (e) => {
    e.stopPropagation()
    searchBar.classList.add("active")
})

document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !searchIcon.contains(e.target)) {
        searchBar.classList.remove("active")
    }
})

if(savedTheme){
    document.documentElement.setAttribute("data-theme", savedTheme)
}
else{
    document.documentElement.setAttribute("data-theme", "light")
}

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    
    document.documentElement.setAttribute("data-theme", newTheme)

    localStorage.setItem("theme", newTheme)
})

mobileThemeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    
    document.documentElement.setAttribute("data-theme", newTheme)

    localStorage.setItem("theme", newTheme)
})

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    document.body.classList.add("menu-open")
})

closeIcon.addEventListener("click", () => {
    closeMobileMenu()
})

function closeMobileMenu() {
    mobileMenu.classList.remove("active")
    document.body.classList.remove("menu-open")
}

window.addEventListener("resize", () => {
    if(window.innerWidth > 650){
        closeMobileMenu()
    }
})