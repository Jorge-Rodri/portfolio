const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle'); 

const colors = ['#ff803b', '#f37639', '#e76c36', '#db6233', '#cf5930', '#c34f2d', '#b7462a', '#ab3d27', '#9f3424', '#932c20', '#87231d', '#7b1a19'];
// Inicialización

// Inicialización
circles.forEach(function(circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
    
    // CORRECCIÓN: He borrado animateCircles() de aquí.
    // El 'loop' se encarga de moverlo, aquí solo capturamos coordenadas.
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function(circle, index) {
        // Posicionamos el círculo
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        // Calculamos la posición para el SIGUIENTE círculo
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

// Iniciamos el bucle una sola vez
animateCircles();


// Detecta si es un sistema operativo móvil
const isMobileOS = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Si es móvil, añade la clase 'es-movil' a la etiqueta <html>
if (isMobileOS) {
    document.documentElement.classList.add('es-movil');
}