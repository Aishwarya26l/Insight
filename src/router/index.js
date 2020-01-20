import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Contact from "@/components/Contact";

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
