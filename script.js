const backgrounds = [
    'url("https://xatimg.com/image/tNsBVzTf3LXj.png")',
    'url("https://xatimg.com/image/yYCZWyv49PSs.png")',
    'linear-gradient(45deg,rgb(244, 114, 100),rgb(229, 180, 74))',
    'url("https://xatimg.com/image/lxZsiksVIC1o.png")',
    'url("https://xatimg.com/image/qfnPywImDtt7.png")',
    'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    'url("https://xatimg.com/image/6wUdMoOfllru.png")',
    'url("https://xatimg.com/image/4RSXj3I3FDAI.png")',
];

    const changeBgBtn = document.getElementById('change-bg-btn');

    let currentIndex = 0;

    document.body.style.background = backgrounds[currentIndex];
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';


    changeBgBtn.addEventListener('click', () => {

        currentIndex = (currentIndex + 1) % backgrounds.length;
            
        document.body.style.background = backgrounds[currentIndex];
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    });
