import express from 'express'
import cors from 'cors'
import tripRoutes from './routes/trips.js'
import activityRoutes from './routes/activities.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())



// Dynamic Routes
app.use('/api/trips', tripRoutes)
app.use('/api/activities', activityRoutes)


// Static Routes
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
})

const PORT = process.env.PORT || 3000
// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})