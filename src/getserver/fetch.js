import { baseUrl } from '../config/env'
import axios from 'axios'
axios.defaults.timeout = 50000;            //响应时间
 axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';      //配置请求头
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';      //配置请求头
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';      //配置请求头
axios.defaults.headers.delete['Content-Type'] = 'application/json;charset=UTF-8'; 
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'; 
axios.defaults.headers.patch['Content-Type'] = 'application/json;charset=UTF-8'; 
axios.defaults.headers.put['Content-Type'] = 'application/json;charset=UTF-8'; 
axios.defaults.headers.head['Content-Type'] = 'application/json;charset=UTF-8'; 
axios.defaults.headers.common["Accept"] ="text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
axios.defaults.baseURL = baseUrl;  //配置接口地址
console.log(axios.defaults)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if (config.method === 'post') {
        if (typeof config.data=="object"){
            config.data = JSON.stringify(config.data);
        }else{
            config.data = config.data;
        }
       
    }
    return config;
}, (error) => {
    console.log("错误的传参", 'fail');
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //对响应数据做些事
    if (!res.data.success) {
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    console.log("网络异常", 'fail');
    return Promise.reject(error);
});
//返回一个Promise(发送post请求)
export function fetch(url, params,method="") {
    console.log(method)
    if (method == "" || method==="get"){
        return new Promise((resolve, reject) => {
            // params.headers
           var $http = axios.create({
                baseURL: url,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            })
            // params.headers['Content-Type'] = 'application/json;charset=UTF-8';  
            $http.get(url, { "headers": { "Content-Type": "application/json; charset=utf-8" },params}).then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }else{
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    
}