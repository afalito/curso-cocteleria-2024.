document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    // Simulación de verificación del usuario
    if (isValidUser(username, password)) {
        sessionStorage.setItem('isLoggedIn', 'true'); // Guarda el estado de la sesión
        showVideoScreen(); // Muestra la pantalla de video
    } else {
        showErrorMessage('Usuario o clave incorrecta. Por favor, inténtalo de nuevo.');
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn'); // Elimina el estado de sesión al cerrar sesión
    hideVideoScreen(); // Oculta la pantalla de video
});

window.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        showVideoScreen();
    } else {
        hideVideoScreen();
    }

    // Asegúrate de que todo esté bien centrado
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'flex';
    mainContent.style.justifyContent = 'center';
    mainContent.style.alignItems = 'center';
});

function isValidUser(username, password) {
    // Validar usuario de manera simple sin incluir las credenciales directamente en el código
    return username === 'cursococteleria2024' && password === 'obsequio';
}

function showVideoScreen() {
    document.getElementById('login-screen').classList.add('hidden');
    const videoScreen = document.getElementById('video-screen');
    videoScreen.classList.remove('hidden');
    videoScreen.style.display = 'block';
    videoScreen.classList.add('expanded');

    // Añade el video de YouTube
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/1Dr-YXBubuI';
    iframe.width = '640';
    iframe.height = '360';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    videoScreen.querySelector('.video-container').appendChild(iframe);
}

function hideVideoScreen() {
    const videoScreen = document.getElementById('video-screen');
    videoScreen.classList.add('hidden');
    videoScreen.style.display = 'none';
    videoScreen.classList.remove('expanded');
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-message').innerText = '';

    // Remover el iframe del video al cerrar sesión
    const iframe = videoScreen.querySelector('iframe');
    if (iframe) {
        iframe.remove();
    }
}

function showErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = message;
    errorMessage.style.color = 'red';
    errorMessage.classList.add('shake');
    setTimeout(() => {
        errorMessage.classList.remove('shake');
    }, 500);
}
