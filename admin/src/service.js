import axios from 'axios';

// 登录
export const loginInstance = axios.create({
    baseURL: '/adminapi/user/login',
    timeout: 1000,
});


// // 登录接口
// export const login = async (params) => {
//     try {
//         const res = await axios.post("/adminapi/user/login", params);
//         console.log('zz-res', res);

//         if (res.data.ActionType === "OK") {
//             // 如果请求成功
//             return res.data;
//         } else {
//             throw Error('请求出错了')
//         }

//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };
