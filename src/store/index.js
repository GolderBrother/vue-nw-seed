import Vue from "vue"
import vuex from "vuex"

// const { initVuexModules } = require("./modules/index");  
// import user from "./modules/user"
// import leave from "./modules/leave"
import regist from "./modules/regist"
// import scanner from "./modules/scanner"
import system from "./modules/system"
// import dayEnter from "./modules/dayEnter"
// import fpRegist from "./modules/fpRegist"
// import setParams from "./modules/setParams"
import enterPlace from "./modules/enterPlace"
// import certificate from "./modules/certificate"
// import clientServer from "./modules/clientServer"
// import printTickertape from "./modules/printTickertape"
// import environmentDetect from "./modules/environmentDetect"


Vue.use(vuex);

// initVuexModules();

const store = new vuex.Store({
  modules: {
    system,
    enterPlace,
    // user,
    // leave,
    regist,
    // scanner,
    // dayEnter,
    // fpRegist,
    // setParams,
    // certificate,
    // clientServer,
    // printTickertape,
    // environmentDetect
  },
  strict: process.env.NODE_ENV !== "production"
});

export default store;
