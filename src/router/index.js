import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Contact from "@/pages/Contact";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "start",
      component: Home
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    }
  ]
});
