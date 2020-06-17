/*
 * @Author: .Soul 
 * @Date: 2020-06-16 14:57:19 
 * @Last Modified by:   .Soul 
 * @Last Modified time: 2020-06-16 14:57:19 
 */

/**
 * 手机号
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const validateMobilePhone = (value,rule) => {
  if (value === "") {
    return false
    // callback(new Error("手机号不可为空"));
  } else {
    if (value !== "") {
      var reg = /^1[3456789]\d{9}$/;
      if (!reg.test(value)) {
        return false
        // callback(new Error("请输入有效的手机号码"));
      }
    }
    // callback();
    return true
  }
};

/**
 * 邮箱
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const validateEmail = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请正确填写邮箱"));
  } else {
    if (value !== "") {
      var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!reg.test(value)) {
        callback(new Error("请输入有效的邮箱"));
      }
    }
    callback();
  }
};

/**
 * 密码
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请设置正确格式的密码"));
  } else if (value.length < 6) {
    callback(new Error("密码长度最小6位"));
  } else {
    callback();
  }
};

/**
 * 固定电话
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const validatePhone = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("机构电话不可为空"));
  } else {
    if (value !== "") {
      var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
      if (!reg.test(value)) {
        callback(new Error("请输入正确的手机号或者座机号格式为：0000-0000000"));
      }
    }
    callback();
  }
};

/**
 * 微信
 * @param {*}} rule
 * @param {*} value
 * @param {*} callback
 */
const validateWeixin = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("微信号不能为空"));
  } else {
    var reg = /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/;
    if (!reg.test(value)) {
      callback(new Error("请输入正确的微信号码"));
    } else {
      callback();
    }
  }
};

export {
  validateMobilePhone,
  validateEmail,
  validatePass,
  validatePhone,
  validateWeixin
};
