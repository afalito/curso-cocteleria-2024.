document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    const videoScreen = document.getElementById('video-screen');

    if (loginButton) {
        loginButton.addEventListener('click', async function(e) {
            e.preventDefault();
            try {
                const response = await fetch('/api/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: usernameInput.value,
                        password: passwordInput.value
                    })
                });

                const data = await response.json();
                console.log('Response:', data); // Para depuración

                if (data.success) {
                    loginScreen.classList.add('hidden');
                    videoScreen.classList.remove('hidden');
                    const videoContainer = videoScreen.querySelector('.video-container');
                    
                    if (!videoContainer.querySelector('iframe')) {
                        const iframe = document.createElement('iframe');
                        iframe.src = 'https://www.youtube.com/embed/1Dr-YXBubuI?rel=0&modestbranding=1&iv_load_policy=3';
                        iframe.width = '100%';
                        iframe.height = '360';
                        iframe.frameBorder = '0';
                        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                        iframe.allowFullscreen = true;
                        videoContainer.appendChild(iframe);
                    }
                    // Ensure the page scrolls to the top when video is shown
                    window.scrollTo(0, 0);
                } else {
                    errorMessage.innerText = data.message || 'Usuario o clave incorrecta';
                    errorMessage.style.color = '#ff6666';
                }
            } catch (error) {
                console.error('Error:', error);
                errorMessage.innerText = 'Ocurrió un error. Por favor, intenta de nuevo.';
                errorMessage.style.color = '#ff6666';
            }
        });
    }

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            videoScreen.classList.add('hidden');
            loginScreen.classList.remove('hidden');
            usernameInput.value = '';
            passwordInput.value = '';
            errorMessage.innerText = '';
            const iframe = videoScreen.querySelector('iframe');
            if (iframe) {
                iframe.remove();
            }
            // Ensure the page scrolls to the top when returning to login screen
            window.scrollTo(0, 0);
        });
    }
});
