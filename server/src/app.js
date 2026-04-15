import cors from 'cors'
import express from 'express'

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(express.json())

app.get("/", (req, res) => {
  return res.status(200).json({
    message : "server is running",
    error : false,
    success  : true,
  })
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

export default app;