
const UserModel = require('../../module/UserModel')
const UserService = {
    login: async ({ username, password }) => {
        console.log('zz-username,password', username, password);
        // 查询数据库中是否有该用户
        return UserModel.find({ username, password })
    },
    // 添加用户
    add: async ({ username, introduction, gender, avatar, password, role }) => {
        // 向数据库插入数据
        return UserModel.create({
            username, introduction, gender, avatar, password, role
        })
    },

    // 获取用户列表(单个 或 全部)
    getList: async ({ id }) => {
        return id ? UserModel.find({ _id: id }, ["username", "role", "introduction", "password"]) : UserModel.find({}, ["username", "role", "avatar", "introduction", "gender"])
    },
    delList: async ({ id }) => {
        return UserModel.deleteOne({ _id: id })
    },
    // 更新用户信息
    putList: async (body) => {
        return UserModel.updateOne({ _id: body._id }, body)
    },
}

module.exports = UserService;