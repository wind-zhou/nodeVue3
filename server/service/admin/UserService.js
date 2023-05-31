
const UserModel = require('../../module/UserModel')
const UserService = {
    login: async ({ username, password }) => {
        console.log('zz-username,password', username, password);
        // 查询数据库中是否有该用户
        return UserModel.find({username, password})

    }
}

module.exports = UserService;