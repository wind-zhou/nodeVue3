
import axios from 'axios'

// 拦截请求，统一加 token
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

// 拦截 响应，将 token去下存到本地
axios.interceptors.response.use((response) => {
    const { authorization } = response.headers

    console.log('zz-authorization', authorization,response);
    authorization && localStorage.setItem("token", authorization)
    return response;
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { status } = error.response
    // HTTP状态码401表示请求的资源需要认证，但是客户端未提供有效的凭据。这通常意味着该网页需要登录才能访问。
    if (status === 401) {
        localStorage.removeItem("token")
        window.location.href = "#/login"
    }
    return Promise.reject(error);
});
