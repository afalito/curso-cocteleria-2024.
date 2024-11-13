import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/script.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Curso de Coctelería 2024</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Curso de Coctelería 2024 - Aprende técnicas profesionales" />
        <meta name="monetization" content="none" />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <div className="page-container">
        <main id="main-content">
          <div id="login-screen" className="content-box">
            <div className="login-box">
              <h1>Bienvenido al Curso de Coctelería 2024</h1>
              <p>Accede con tu usuario y contraseña para disfrutar del contenido completo.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="username" className="sr-only">Usuario</label>
                <input type="text" id="username" placeholder="Usuario" required />
                <label htmlFor="password" className="sr-only">Contraseña</label>
                <input type="password" id="password" placeholder="Contraseña" required />
                <button id="login-button" type="submit">Ingresar</button>
              </form>
              <p id="error-message" aria-live="polite"></p>
            </div>
          </div>
          
          <div id="video-screen" className="content-box hidden">
            <div className="video-container">
              <h2>Curso de Coctelería 2024</h2>
              <p>Disfruta de nuestro contenido exclusivo sobre coctelería profesional.</p>
              {/* El iframe de YouTube se añadirá aquí dinámicamente */}
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
