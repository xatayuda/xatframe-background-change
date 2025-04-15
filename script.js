// Array de fondos (puedes agregar más)
const backgrounds = [
    'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    'url("https://xatimg.com/image/tNsBVzTf3LXj.png")',
    'linear-gradient(45deg,rgb(244, 114, 100),rgb(229, 180, 74))',
    'url("https://xatimg.com/image/yYCZWyv49PSs.png")',
    'linear-gradient(45deg, #ffafbd,rgb(249, 158, 105))',
    'url("https://xatimg.com/image/qfnPywImDtt7.png")',
    'url("https://xatimg.com/image/6wUdMoOfllru.png")',
    'url("https://xatimg.com/image/4RSXj3I3FDAI.png")',
];

const changeBgBtn = document.getElementById('change-bg-btn');

        // Índice inicial
        let currentIndex = 0;

        // Aplicar el primer fondo al cargar
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
        });
