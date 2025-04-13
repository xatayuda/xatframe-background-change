// Array de fondos (puedes agregar más)
const backgrounds = [
    'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    'linear-gradient(45deg, #1a2a6c, #b21f1f, #fdbb2d)',
    'linear-gradient(45deg, #00c6ff, #0072ff)',
    'linear-gradient(45deg, #ffafbd,rgb(249, 158, 105))',
    'linear-gradient(45deg, #f12711, #f5af19)',
    'url("https://xatimg.com/image/yYCZWyv49PSs.png")',
    'url("https://xatimg.com/image/qfnPywImDtt7.png")',
    'url("https://xatimg.com/image/tNsBVzTf3LXj.png")',
    'url("https://xatimg.com/image/6wUdMoOfllru.png")',
    'url("https://xatimg.com/image/4RSXj3I3FDAI.png")',
];

// Obtener el botón
const changeBgBtn = document.getElementById('change-bg-btn');

// Cargar fondo guardado desde localStorage
let currentIndex = parseInt(localStorage.getItem('backgroundIndex')) || 0;
        if (currentIndex >= backgrounds.length) {
            currentIndex = 0; // Reiniciar si el índice guardado es inválido
        }
        document.body.style.background = backgrounds[currentIndex];
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';

        // Función para cambiar el fondo
        changeBgBtn.addEventListener('click', () => {
            // Incrementar el índice y rotar al inicio si se llega al final
            currentIndex = (currentIndex + 1) % backgrounds.length;
            
            // Aplicar el fondo
            document.body.style.background = backgrounds[currentIndex];
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';

            // Guardar el índice del fondo en localStorage
            localStorage.setItem('backgroundIndex', currentIndex);
        });