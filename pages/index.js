<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> </title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <!-- Main Content Wrapper -->
    <main id="main-content">
        <!-- Login Screen -->
        <div id="login-screen" class="content-box">
            <div class="login-box">
                <h2>Bienvenido al Curso de Coctelería 2024</h2>
                <p>Accede con tu usuario y contraseña para disfrutar del contenido completo.</p>
                <input type="text" id="username" placeholder="Usuario">
                <input type="password" id="password" placeholder="Clave">
                <button id="login-button">Ingresar</button>
                <p id="error-message"></p>
            </div>
        </div>
        
        <!-- Video Screen -->
        <div id="video-screen" class="content-box hidden">
            <div class="video-container">
                <h2>Curso de Coctelería 2024</h2>
                <p>Disfruta de nuestro contenido exclusivo sobre coctelería profesional. Aprende técnicas, recetas y mucho más.</p>
                <!-- Iframe for YouTube video will be appended here by script.js -->
            </div>
            <button id="logout-button">Cerrar Sesión</button>
        </div>
    </main>

    <!-- Footer Section -->
    <footer id="main-footer">
        <div class="footer-container">
            <p>Fluxon 2024. Todos los derechos reservados.</p>
        </div>
    </footer>
</body>
</html>