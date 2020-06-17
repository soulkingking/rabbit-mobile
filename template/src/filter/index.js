/*
 * @Author: .Soul 
 * @Date: 2020-06-16 15:01:43 
 * @Last Modified by:   .Soul 
 * @Last Modified time: 2020-06-16 15:01:43 
 */

import { compareAsc, format } from "date-fns";

const install = Vue => {
  Vue.filter("date", function(dataStr, pattern = "yyyy-MM-dd HH:mm:ss") {
    return format(new Date(dataStr), pattern);
  });
};
export default install;
