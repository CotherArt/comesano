import "./style.css";
// import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(fas, fab);

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.mount("#app");
