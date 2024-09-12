function navigate(event, sectionId) {
    event.preventDefault();

    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active-section');

    // Cambiar la URL sin recargar la página
    window.history.pushState(null, null, `#${sectionId}`);

    // Desplazar la página al principio
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// Manejar el estado del historial cuando se navega por el historial del navegador
window.addEventListener('popstate', () => {
    const currentHash = window.location.hash.substring(1);
    navigate(null, currentHash || 'home');
});