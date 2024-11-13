import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Curso de Coctelería 2024</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Curso de Coctelería 2024 - Aprende técnicas profesionales" />
        <link rel="stylesheet" href="/style.css" />
        <script src="/script.js" defer></script>
      </Head>

      <div className="page-container">
        <main id="main-content">
          <div id="login-screen" className="content-box">
            <div className="login-box">
              <h2>Bienvenido al Curso de Coctelería 2024</h2>
              <p>Accede con tu usuario y contraseña para disfrutar del contenido completo.</p>
              <input type="text" id="username" placeholder="Usuario" />
              <input type="password" id="password" placeholder="Clave" />
              <button id="login-button">Ingresar</button>
              <p id="error-message"></p>
            </div>
          </div>
          
          <div id="video-screen" className="content-box hidden">
            <div className="video-container">
              <h2>Curso de Coctelería 2024</h2>
              <p>Disfruta de nuestro contenido exclusivo sobre coctelería profesional.</p>
            </div>
            <button id="logout-button">Cerrar Sesión</button>
          </div>
        </main>

        <footer id="main-footer">
          <div className="footer-container">
            <p>Fluxon 2024. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
