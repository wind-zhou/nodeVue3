/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const mongoose = require("mongoose")
const Schema = mongoose.Schema
// user模型===>users集合

const UserType = {
    username: String,
    password: String,
    gender: Number, //性别 ,0,1,2
    introduction: String,//简介
    avatar: String,
    role: Number //管理员1 ,编辑2
}
const UserModel = mongoose.model("stus", new Schema(UserType))  // stus 值得是数据库下集合的名字

module.exports = UserModel