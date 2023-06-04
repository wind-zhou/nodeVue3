import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: () => ({
        // 用户列表
        userList: []
    }),


    actions: {
        // 增加用户
        async addUser(userForm, callBack) {
            try {
                // 将表单数据处理成multipart/form-data
                const params = new FormData();
                for (let i in userForm) {
                    params.append(i, userForm[i])
                }
                console.log('zz-FormData', params);
                const res = await axios.post("http://localhost:3000/adminapi/user/add", params, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                console.log(res, 'zz----------')

                if (res.data.ActionType === "OK") {
                    return true;
                } else {
                    throw new Error('kkk')
                }
            } catch (error) {
                ElMessage.error(res.data.error || '添加用户失败');
                return false;
            }
        }
    },
})
