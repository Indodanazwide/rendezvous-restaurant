import express from 'express'
import { login, signup } from '../controllers/auth.controller.js'
import { authenticate, authorizeRoles } from '../middleware/auth.middleware.js'
import adminRouter from './admin.routes.js'

// router init
const router = express.Router()

// auth routes
router.post('/signup', signup)
router.post('/login', login)

// admin routes
router.use('/admin', authenticate, authorizeRoles('admin'), adminRouter)

export default router