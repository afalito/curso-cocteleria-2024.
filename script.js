<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de Coctelería 2024</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/@supabase/supabase-js"></script>
    <script defer src="script.js"></script>
</head>
<body>
    <div id="main-content">
        <div id="login-screen">
            <h1>Bienvenido al Curso de Coctelería 2024</h1>
            <p>Accede con tu usuario y contraseña para disfrutar del contenido completo.</p>
            <input type="text" id="username" placeholder="Usuario">
            <input type="password" id="password" placeholder="Clave">
            <button id="login-button">Ingresar</button>
            <p id="error-message"></p>
        </div>

        <div id="video-screen" class="hidden">
            <h1>Curso de Coctelería 2024</h1>
            <p>Disfruta de nuestro contenido exclusivo sobre coctelería profesional. Aprende técnicas, recetas y mucho más.</p>
            <div class="video-container"></div>
            <button id="logout-button">Cerrar Sesión</button>
        </div>
    </div>

    <footer>
        <p>Fluxon 2024. Todos los derechos reservados.</p>
    </footer>
</body>
</html>
