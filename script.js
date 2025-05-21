const backgrounds = [
    'url("https://xatimg.com/image/moCx9J70xv6o.png")',
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

// AGREGANDO EL RELOJ

function updateNewYorkClock() {
    const now = new Date();

    // Options for New York time zone
    const options = {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // Use 12-hour format with AM/PM
    };

    const newYorkTime = now.toLocaleString('en-US', options);

    // Split the time string to format seconds separately
    const parts = newYorkTime.split(':');
    let hourMinute = parts[0] + ':' + parts[1];
    const secondAndAmPm = parts[2].split(' ');
    const seconds = secondAndAmPm[0];
    const ampm = secondAndAmPm[1];

    // Handle cases where the hour might include the AM/PM already (e.g., "1 PM:45")
    if (hourMinute.includes("AM") || hourMinute.includes("PM")) {
        const hourMinuteParts = hourMinute.split(' ');
        hourMinute = hourMinuteParts[0];
        // ampm is already correctly extracted
    }
    
    document.getElementById('time').textContent = hourMinute;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}

// Update the clock every second
setInterval(updateNewYorkClock, 1000);

// Initial call to display the clock immediately
updateNewYorkClock();
