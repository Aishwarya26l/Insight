// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// Highcharts charting library
import HighchartsVue from "highcharts-vue";
import { Chart } from "highcharts-vue";

// Vue Simple Suggest
import VueSimpleSuggest from "vue-simple-suggest/lib";

// Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../src/assets/css/app.css";

// Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUniversity,
  faChartBar,
  faPaperPlane,
  faUser,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(HighchartsVue);

library.add(faHome, faUniversity, faChartBar, faPaperPlane, faUser, faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("vue-simple-suggest", VueSimpleSuggest);
Vue.component("highcharts", Chart);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
