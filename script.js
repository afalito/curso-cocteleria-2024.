document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'cursococteleria2024' && password === 'obsequio') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('video-screen').classList.remove('hidden');
        document.getElementById('video-screen').style.display = 'block';
    } else {
        document.getElementById('error-message').innerText = 'Usuario o clave incorrecta. Por favor, inténtalo de nuevo.';
        document.getElementById('error-message').style.color = 'red';
        document.getElementById('error-message').classList.add('shake'); // Add shake animation
        setTimeout(() => {
            document.getElementById('error-message').classList.remove('shake');
        }, 500); // Remove the shake class after the animation completes
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.getElementById('video-screen').classList.add('hidden');
    document.getElementById('video-screen').style.display = 'none';
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-message').innerText = '';
});

// Prevent the video container from being visible before login
window.addEventListener('DOMContentLoaded', function() {
    const videoScreen = document.getElementById('video-screen');
    videoScreen.classList.add('hidden');
    videoScreen.style.display = 'none';
});

// Prevent the video container from being scrollable before login
window.addEventListener('scroll', function() {
    const videoScreen = document.getElementById('video-screen');
    if (!videoScreen.classList.contains('hidden')) {
        return;
    } else {
        window.scrollTo(0, 0); // Force the scroll to stay at the top if not logged in
    }
});
