import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Productos from "../views/Productos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dondeEstamos",
    name: "DondeEstamos",
    //esta forma permite lazy-load es decir que la carga del html + el java script se cargue al
    //momento de llamar a la pagina, si lo hacemos como en Home, se carga al iniciar la aplicación
    component: () => import("../views/DondeEstamos.vue"),
  },
  {
    path: "/detalle/:id",
    name: "DetalleProducto",
    component: () => import("../views/DetalleProducto.vue"),
  },
  {
    path: "/abm",
    name: "ABM",
    component: () => import("../views/Abm.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
