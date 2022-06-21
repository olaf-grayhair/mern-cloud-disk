const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const FileController = require('../controllers/FileController')


router.post('', authMiddleware, FileController.createDir)
router.get('', authMiddleware, FileController.getFiles)

module.exports = router