import { createApp } from "vue";
import TodoList from "./components/ToDoList.vue";
import App from "./App.vue";
import LeftNavBar from "./components/LeftNavBar.vue";
import TopNavBar from "./components/TopNavBar.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const app = createApp(App);

app.component("LeftNavBar", LeftNavBar);
app.component("TopNavBar", TopNavBar);
app.component("ToDoList", TodoList);
app.use(BootstrapVue);
app.use(IconsPlugin);
app.mount("#app");
