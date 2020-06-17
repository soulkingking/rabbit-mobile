/*
 * @Author: .Soul 
 * @Date: 2020-06-16 14:54:20 
 * @Last Modified by:   .Soul 
 * @Last Modified time: 2020-06-16 14:54:20 
 */

const BASE_URL = {
  prod: "",
  dev: "",
};


function baseURL(env) {
  return BASE_URL[env];
}

const BASE_NAME = "rabbit";
export { baseURL, BASE_NAME };
