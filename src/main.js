import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.directive("todef", function (el, binding, vnode) {
  // el.style.backgroundColor = "red";
  console.log(Object.keys(vnode));
  vnode.context.$props.to = binding.value + "?test=1";
});

Vue.use(VueRouter);
new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
