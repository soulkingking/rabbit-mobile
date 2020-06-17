/*
 * @Author: .Soul 
 * @Date: 2020-06-16 14:55:03 
 * @Last Modified by:   .Soul 
 * @Last Modified time: 2020-06-16 14:55:03 
 */

import axios from "axios";
import store from "@/store";
import {baseURL} from "@/config";
import API from "@/config/Api";
import router from "@/router";
import {Notify} from "vant";
import {Dialog} from "vant";

// 创建axios实例
const instance = axios.create({

    baseURL: baseURL("dev"),
    timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // if (config.url != API.login && config.url != API.register) {
        //     if (store.state.setting.token) {
        //         config.headers["token"] = store.state.setting.token;
        //     }
        // }
        return config;
    },
    (error) => {
        //对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        const res = response.data;
        if (res.code == 200) {
            return [null, res];
        } else {
            Notify({type: "danger", message: res.failMessage});
            return [res, null];
        }
    },
    (error) => {
        // 对响应错误做点什么

        if (error.response) {
            if (error.response.status === 401) {
                // 这种情况一般调到登录页
                Dialog.confirm({
                    title: "提示",
                    message: "令牌过期，请重新登录",
                })
                    .then(() => {
                        // on confirm
                        router.replace({path: "/login"});
                    })
                    .catch(() => {
                        // on cancel
                    });
            } else if (error.response.status === 403) {
                // 提示无权限等
                Notify({type: "danger", message: "无操作权限"});
            } else {
                // 其他错误处理
                Notify({type: "danger", message: "服务器发生错误"});
            }
        }

        return Promise.resolve([error, null]);
    }
);
export default instance;
