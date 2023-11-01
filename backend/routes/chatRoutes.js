const express = require('express')
const router = express.Router()
const {protect} = require('../middlewares/authMiddleware')
const {accessChat} = require('../controllers/chatController')

router.post('/',protect,accessChat)
// router.get('/',protect,fetchChats)
// router.post('/group',protect,createGroupChats)
// router.put('/rename',protect,renameGroup)
// router.put('/groupremove',protect,removeFromGroup)
// router.put('/addGroup',protect,addToGroup)


module.exports = router