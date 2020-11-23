document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger")
    const hamburgerImage = document.querySelector(".hamburger-logo")
    const dropdownMenu = document.querySelector(".navbar-dropdown")
    let isOpen = false;

    hamburger.addEventListener("click", () => {
        if(!isOpen){
            hamburgerImage.src = "./images/icon-close.svg"
            dropdownMenu.style.display = "flex"
            return isOpen = true
        } else {
            hamburgerImage.src = "./images/icon-hamburger.svg"
            dropdownMenu.style.display = "none"
            return isOpen = false
        }
    })
});