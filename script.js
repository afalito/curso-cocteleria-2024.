document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const loginScreen = document.getElementById('login-screen');
    const videoScreen = document.getElementById('video-screen');

    if (loginButton) {
        loginButton.addEventListener('click', async function() {
            const username = usernameInput.value;
            const password = passwordInput.value;

            try {
                const response = await fetch('verify.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                const data = await response.json();

                if (data.success) {
                    loginScreen.classList.add('hidden');
                    videoScreen.classList.remove('hidden');
                    videoScreen.style.display = 'block';

                    // Add YouTube iframe for video display
                    const iframe = document.createElement('iframe');
                    iframe.src = 'https://www.youtube.com/embed/1Dr-YXBubuI?rel=0&modestbranding=1&iv_load_policy=3';
                    iframe.width = '640';
                    iframe.height = '360';
                    iframe.frameBorder = '0';
                    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                    iframe.allowFullscreen = true;
                    videoScreen.querySelector('.video-container').appendChild(iframe);
                } else {
                    errorMessage.innerText = data.message || 'Ocurrió un error. Por favor, intenta de nuevo.';
                    errorMessage.style.color = 'red';
                }
            } catch (error) {
                console.error('Error:', error);
                errorMessage.innerText = 'Ocurrió un error. Por favor, intenta de nuevo.';
                errorMessage.style.color = 'red';
            }
        });
    } else {
        console.error('Login button not found');
    }

    // Logout functionality
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
        });
    }
});
