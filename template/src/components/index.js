import RabbitContainer from "./RabbitContainer";
import RabbitMain from "./RabbitMain";
import RabbitHeader from "./RabbitHeader";
// import JJSwiper from "./JJSwiper";
// import JJSwiperItem from "./JJSwiperItem";

const Rabbit = {
  install: (Vue) => {
    Vue.component("r-container", RabbitContainer);
    Vue.component("r-main", RabbitMain);
    Vue.component("r-header", RabbitHeader);
    // Vue.component("jj-swiper",JJSwiper);
    // Vue.component("jj-swiper-item",JJSwiperItem);
  },
};

export default Rabbit;
