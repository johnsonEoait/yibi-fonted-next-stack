import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.31.210:2003',
  // baseURL: 'https://api.yibi.eoait.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 可以在这里添加请求拦截器和响应拦截器
api.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 从 localStorage 中获取 token
    const token = localStorage.getItem('token');

    // 如果 token 存在，则添加到请求头中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default api;
