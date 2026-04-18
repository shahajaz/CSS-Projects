const navLinks = document.getElementById("navLinks");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

// Open menu
openMenu.addEventListener("click", () => {
    navLinks.classList.add("active");
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

// Close menu
closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
});
