import express from 'express'
import { createCategory, deleteCategory, getCategories, updateCategory } from '../controllers/category.controller.js'
import { createMenuItem, deleteMenuItem, getMenuItems, updateMenuItem } from '../controllers/menu.controller.js'

const adminRouter = express.Router()

// menu
adminRouter.post('/categories', createCategory)
adminRouter.get('/categories', getCategories)
adminRouter.put('/categories/:id', updateCategory)
adminRouter.delete('/categories/:id', deleteCategory)

adminRouter.post('/menu', createMenuItem)
adminRouter.get('/menu', getMenuItems)
adminRouter.put('/menu/:id', updateMenuItem)
adminRouter.delete('/menu/:id', deleteMenuItem)

// order
adminRouter.get('/order')
adminRouter.put('/order')

// takeaway
adminRouter.get('/takeaways')
adminRouter.put('/takeaways')

// reservation
adminRouter.get('/reservations')
adminRouter.put('/reservations')

export default adminRouter