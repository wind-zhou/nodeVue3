
const UserModel = require('../../module/UserModel')
const UserService = {
    login: async (username, password) => {
        return UserModel.find({
            username,
            password
        })

    }
}

module.exports = UserService;