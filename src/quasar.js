import Vue from "vue";

import "./styles/quasar.scss";
import "quasar/dist/quasar.ie.polyfills";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, Dialog, Notify } from "quasar";

Vue.use(Quasar, {
  config: {},
  plugins: {
    Dialog,
    Notify,
  },
});
