import express from 'express'
import { logout, signin, signup } from '../controllers/auth.controller'

const router = express.Router()

router.get("/signup", signup)
router.get('/signin', signin)
router.get('/logout', logout)

export default router