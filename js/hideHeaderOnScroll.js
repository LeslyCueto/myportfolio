// hideHeaderOnScroll.js

// Función para mostrar u ocultar el encabezado según el desplazamiento
function handleHeaderVisibility() {
    var header = document.getElementById("header");
    var mainSection = document.getElementById("resumeSection"); // Cambia a "aboutme" si prefieres utilizar la clase "aboutme"

    // Verificar si el header y la sección principal existen
    if (header && mainSection) {
        var mainSectionTop = mainSection.offsetTop;

        // Calcular el 30% de la altura de la ventana
        var windowHeight = window.innerHeight;
        var thirtyPercentWindowHeight = 0.3 * windowHeight;

        // Calcular la posición en la que se debe ocultar o mostrar el encabezado
        var scrollPositionToShow = mainSectionTop - thirtyPercentWindowHeight;
        var scrollPositionToHide = mainSectionTop;

        // Agregar un event listener para el evento de scroll
        window.addEventListener("scroll", function() {
            // Obtener la dirección del scroll
            var isScrollingDown = this.oldScroll < this.scrollY;

            // Si el desplazamiento alcanza la posición de la sección principal
            if (window.scrollY >= scrollPositionToShow && !isScrollingDown) {
                header.classList.add("visible");
                header.classList.remove("hidden");
            } 
            // Si el desplazamiento alcanza la posición para ocultar el encabezado
            else if (window.scrollY >= scrollPositionToHide && isScrollingDown) {
                header.classList.add("hidden");
                header.classList.remove("visible");
            } 
            // Si se está desplazando hacia arriba y no ha alcanzado la posición para ocultar el encabezado
            else {
                header.classList.remove("hidden");
                header.classList.remove("visible");
            }

            // Guardar la posición del scroll actual
            this.oldScroll = this.scrollY;
        });
    }
}

// Llamar a la función al cargar la página
window.addEventListener("load", handleHeaderVisibility);
