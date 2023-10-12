

import express from 'express'
import { generateImage } from '../controllers/generateContoller'

const router = express.Router()


router.post('/generate', generateImage)

export default router