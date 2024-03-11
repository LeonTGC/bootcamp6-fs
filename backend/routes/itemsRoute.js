const express = require('express')

const router = express.Router()
const itemsController = require('../controllers/itemsController.js')

// http://localhost:4000/todos/item
// http://localhost:4000/todos/items

router.post('/item', itemsController.createTodo)
router.get('/items', itemsController.getTodos)
router.delete('/item/:id', itemsController.deleteTodo)

module.exports = router