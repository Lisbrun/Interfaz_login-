import express, { json } from 'express'
import cors from 'cors'
import { middleware } from './middlewares/index.js'
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(json())
app.use(cors())
app.use(middleware.decodeToken)

app.get('/api', (req, res) => {
  return res.json({ message: 'hello world' })
})

app.listen(PORT, () => {
  console.log(`server listening in http://localhost:${PORT}`)
})
