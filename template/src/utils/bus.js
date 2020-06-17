/*
 * @Author: .Soul
 * @Date: 2020-06-16 14:55:25
 * @Last Modified by:   .Soul
 * @Last Modified time: 2020-06-16 14:55:25
 */

/**
 * 消息总线
 */
const install = (Vue) => {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args);
      },
      on(event, callback) {
        this.$on(event, callback);
      },
      off(event, callback) {
        this.$off(event, callback);
      },
    },
  });
  Vue.prototype.$bus = Bus;
};

export default install;
