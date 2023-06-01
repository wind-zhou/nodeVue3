
var express = require('express');
var router = express.Router();
//图片上传
const multer = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })

const UserController = require('../../controllers/admin/UserController')


router.post('/adminapi/user/login', UserController.login)
router.post("/adminapi/user/add", upload.single('file'), UserController.userAdd)

module.exports = router;

