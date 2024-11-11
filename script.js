document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'cursococteleria2024' && password === 'obsequio') {
        // Add transition for a smoother change between screens
        document.getElementById('login-screen').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('login-screen').classList.add('hidden');
            const videoScreen = document.getElementById('video-screen');
            videoScreen.classList.remove('hidden');
            videoScreen.style.display = 'block';
            videoScreen.classList.add('expanded', 'fade-in'); // Add expanded and fade-in class to make video container larger with transition

            // Add HTML5 video element for video display without ads
            const video = document.createElement('video');
            video.src = 'tu_video.mp4'; // Ruta al video alojado en tu servidor
            video.width = '640';
            video.height = '360';
            video.controls = true;
            videoScreen.querySelector('.video-container').appendChild(video);
        }, 500); // Delay to allow fade-out to complete
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
    // Add fade-out transition for smoother logout experience
    const videoScreen = document.getElementById('video-screen');
    videoScreen.classList.add('fade-out');
    setTimeout(() => {
        videoScreen.classList.add('hidden');
        videoScreen.style.display = 'none';
        videoScreen.classList.remove('expanded', 'fade-out'); // Remove expanded and fade-out class when logged out
        document.getElementById('login-screen').classList.remove('hidden', 'fade-out');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('error-message').innerText = '';

        // Remove video element when logging out
        const video = videoScreen.querySelector('video');
        if (video) {
            video.remove();
        }
    }, 500); // Delay to allow fade-out to complete
});

// Prevent the video container from being visible before login
window.addEventListener('DOMContentLoaded', function() {
    const videoScreen = document.getElementById('video-screen');
    videoScreen.classList.add('hidden');
    videoScreen.style.display = 'none';

    // Ensure everything is centered properly
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'flex';
    mainContent.style.justifyContent = 'center';
    mainContent.style.alignItems = 'center';
});
