export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' })
    return
  }

  const { username, password } = req.body

  if (username === 'cursococteleria2024' && password === 'obsequio') {
    res.status(200).json({ success: true })
  } else {
    res.status(401).json({ success: false, message: 'Usuario o clave incorrecta' })
  }
}
