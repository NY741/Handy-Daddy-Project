import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseMarginedBlock from "./components/UI/BaseMarginedBlock.vue";
import BaseHeader from "./components/UI/BaseHeader.vue";
const app = createApp(App);

app.use(router);
app.component("base-button", BaseButton);
app.component("base-margined-block", BaseMarginedBlock);
app.component("base-header", BaseHeader);
app.mount("#app");
