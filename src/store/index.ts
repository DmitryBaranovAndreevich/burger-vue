import { createStore } from "vuex";
import { mainPageModule } from "./mainPageModule";

export default createStore({
  modules: {
    mainPage: mainPageModule,
  },
});
