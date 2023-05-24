
const UserModel = require('../../module/UserModel')
const UserService = {
    login: async ({ username, password }) => {
        console.log('zz-username,password', username, password);
        return UserModel.find()

    }
}

module.exports = UserService;