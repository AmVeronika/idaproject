import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import elements from "./components/elements/elements";
import "./assets/style/style.scss";

const app = createApp(App);

elements.forEach((el) => {
  app.component(el.name, el);
});

app.use(store).mount("#app");
