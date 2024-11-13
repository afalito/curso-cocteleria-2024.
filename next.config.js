const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-src https://www.youtube.com"
          },
          // Otras cabeceras de seguridad...
        ],
      },
    ]
  },
}
