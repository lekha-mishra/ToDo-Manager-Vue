import Vue from "vue";
import TodoList from "./components/ToDoList.vue";
import App from "./App.vue";
import LeftNavBar from "./components/LeftNavBar.vue";
import TopNavBar from "./components/TopNavBar.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("LeftNavBar", LeftNavBar);
Vue.component("TopNavBar", TopNavBar);
Vue.component("ToDoList", TodoList);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
