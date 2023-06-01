
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
    }
}

module.exports = UserService;