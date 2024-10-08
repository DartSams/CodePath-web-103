import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import GiftsController from '../controllers/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

// Routes
router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req, res) => {
  // console.log('gift ID route hit')
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router