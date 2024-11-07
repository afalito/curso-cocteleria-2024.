document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'cursococteleria2024' && password === 'obsequio') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('video-screen').classList.remove('hidden');
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
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('error-message').innerText = '';
});

// Smooth scrolling effect for links
window.addEventListener('load', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


