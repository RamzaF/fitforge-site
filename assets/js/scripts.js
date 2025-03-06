document.addEventListener("DOMContentLoaded", function() {
    // Agregar animación al Hero
    document.querySelector(".hero").classList.add("show-text");

    // Efecto en los botones de catálogo
    const catalogoItems = document.querySelectorAll(".catalogo-item");
    catalogoItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Animación de redes sociales
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "#ffffff";
            link.style.color = "#000000";
        });

        link.addEventListener("mouseleave", () => {
            link.style.backgroundColor = "transparent";
            link.style.color = "#ffffff";
        });
    });
});
