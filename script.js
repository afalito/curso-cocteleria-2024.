// Inicializa Supabase
const supabaseUrl = "https://cidilhtkjcnonmiwssyv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZGlsaHRramNub25taXdzc3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMTYxOTAsImV4cCI6MjA0NjU5MjE5MH0.FLsElpKlS1xgtzf43t10UwxE7_7_9GWtKbV0BbOFNKg";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

window.addEventListener('DOMContentLoaded', async function() {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const mainContent = document.getElementById('main-content');

    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }

    if (mainContent) {
        // Asegúrate de que todo esté bien centrado
        mainContent.style.display = 'flex';
        mainContent.style.justifyContent = 'center';
        mainContent.style.alignItems = 'center';
    }

    // Verificar si el usuario ya está autenticado
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        showVideoScreen();
    } else {
        hideVideoScreen();
    }
});

async function handleLogin() {
    const email = document.getElementById('username').value.toLowerCase();
    const password = document.getElementById('password').value;

    try {
        // Intentar iniciar sesión usando Supabase
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        
        if (error) {
            throw error;
        }

        // Si la autenticación es exitosa, mostrar la pantalla de video
        showVideoScreen();

    } catch (error) {
        showErrorMessage('Usuario o clave incorrecta. Por favor, inténtalo de nuevo.');
        console.error('Error al iniciar sesión:', error.message);
    }
}

async function handleLogout() {
    try {
        // Cerrar sesión usando Supabase
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }

        // Ocultar la pantalla de video al cerrar sesión
        hideVideoScreen();

    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
    }
}

function showVideoScreen() {
    const loginScreen = document.getElementById('login-screen');
    const videoScreen = document.getElementById('video-screen');
    const videoContainer = videoScreen ? videoScreen.querySelector('.video-container') : null;

    if (loginScreen) {
        loginScreen.classList.add('hidden');
    }
    
    if (videoScreen) {
        videoScreen.classList.remove('hidden');
        videoScreen.style.display = 'block';
        videoScreen.classList.add('expanded');
    }

    if (videoContainer) {
        // Añade el video de YouTube solo si no está presente
        if (!videoContainer.querySelector('iframe')) {
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/1Dr-YXBubuI';
            iframe.width = '640';
            iframe.height = '360';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            videoContainer.appendChild(iframe);
        }
    }
}

function hideVideoScreen() {
    const loginScreen = document.getElementById('login-screen');
    const videoScreen = document.getElementById('video-screen');
    const errorMessage = document.getElementById('error-message');
    const videoContainer = videoScreen ? videoScreen.querySelector('.video-container') : null;

    if (videoScreen) {
        videoScreen.classList.add('hidden');
        videoScreen.style.display = 'none';
        videoScreen.classList.remove('expanded');
    }
    
    if (loginScreen) {
        loginScreen.classList.remove('hidden');
    }

    if (errorMessage) {
        errorMessage.innerText = '';
    }

    // Limpiar los campos de entrada
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    // Remover el iframe del video al cerrar sesión
    if (videoContainer) {
        const iframe = videoContainer.querySelector('iframe');
        if (iframe) {
            iframe.remove();
        }
    }
}

function showErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.innerText = message;
        errorMessage.style.color = 'red';
        errorMessage.classList.add('shake');
        setTimeout(() => {
            errorMessage.classList.remove('shake');
        }, 500);
    }
}
