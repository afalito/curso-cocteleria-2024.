// Inicializa Supabase
const supabaseUrl = "https://cidilhtkjcnonmiwssyv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZGlsaHRramNub25taXdzc3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMTYxOTAsImV4cCI6MjA0NjU5MjE5MH0.FLsElpKlS1xgtzf43t10UwxE7_7_9GWtKbV0BbOFNKg";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('login-button').addEventListener('click', async function() {
    const email = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    try {
        // Intentar iniciar sesión usando Supabase
        const { user, error } = await supabase.auth.signInWithPassword({ email, password });
        
        if (error) {
            throw error;
        }

        // Guardar el estado de sesión en el almacenamiento de la sesión
        sessionStorage.setItem('isLoggedIn', 'true');
        showVideoScreen(); // Mostrar la pantalla de video

    } catch (error) {
        showErrorMessage('Usuario o clave incorrecta. Por favor, inténtalo de nuevo.');
        console.error('Error al iniciar sesión:', error.message);
    }
});

document.getElementById('logout-button').addEventListener('click', async function() {
    try {
        // Cerrar sesión usando Supabase
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }

        // Remover el estado de sesión
        sessionStorage.removeItem('isLoggedIn');
        hideVideoScreen(); // Ocultar la pantalla de video

    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
    }
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
