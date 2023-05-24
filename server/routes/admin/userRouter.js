
var express = require('express');
var router = express.Router();
const UserController = require('../../controllers/admin/UserController')


router.post('/adminapi/user/login', UserController.login)
router.get("/adminapi/user/home", (req, res) => {
    // debug
    console.log('zz---');
    res.send({ ok: 1 })
})

module.exports = router;

