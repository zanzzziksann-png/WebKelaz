function toggleMenu() {

    const menu = document.querySelector(".nav-menu");

    menu.classList.toggle("show");

}


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .querySelector(".nav-menu")
            .classList.remove("show");

    });

});