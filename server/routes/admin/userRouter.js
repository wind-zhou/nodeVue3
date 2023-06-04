
var express = require('express');
var router = express.Router();
//图片上传
const multer = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })

const UserController = require('../../controllers/admin/UserController')

// 登录
router.post('/adminapi/user/login', UserController.login);
// 添加用户
router.post("/adminapi/user/add", upload.single('file'), UserController.userAdd);
// 查询用户列表
router.get("/adminapi/user/list", UserController.getList)
router.get("/adminapi/user/list/:id", UserController.getList)
// 更新用户信息
router.put("/adminapi/user/list/:id", UserController.putList)
// 删除用户
router.delete("/adminapi/user/list/:id", UserController.delList)

module.exports = router;

