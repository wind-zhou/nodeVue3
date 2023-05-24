
const UserService = require('../../service/admin/UserService');
const JWT = require("../../util/JWT");

const UserController = {
    login: async (req, res) => {
        console.log(req.body)
        const result = await UserService.login(req.body)
        // 数据库没有用户信息
        if (result.length === 0) {
            res.send({
                code: "-1",
                error: "用户名密码不匹配"
            })
        } else {
            // 数据库有用户信息 【已注册】
            // 生成token
            const token = JWT.generate({
                _id: result[0]._id,
                username: result[0].username
            }, "1d")

            res.header("Authorization", token)
            res.send({
                ActionType: "OK"
            })

        }
    }
}

module.exports = UserController;