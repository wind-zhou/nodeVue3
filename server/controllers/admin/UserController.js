
const UserService = require('../../service/admin/UserService');
const JWT = require("../../util/JWT");

const UserController = {
    login: async (req, res) => {
        console.log(req.body, 'zz-body')
        const result = await UserService.login(req.body)
        console.log('result', result);

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
            // 将token 挂到 响应头的 Authorization
            res.header("Authorization", token)
            res.send({
                ActionType: "OK",
                data: result[0]
            })

        }
    },
    // 添加用户
    userAdd: async (req, res) => {
        console.log(req.body, 'zz-body')
        const { username, introduction, gender, role, password } = req.body;
        const avatar = req.file ? `/avataruploads/${req.file.filename}` : ""
        await UserService.add({ username, introduction, gender: Number(gender), avatar, role: Number(role), password })
        res.send({
            ActionType: "OK"
        })
    }
}

module.exports = UserController;