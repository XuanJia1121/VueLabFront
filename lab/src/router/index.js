import Vue from "vue";
import Router from "vue-router";
import store from "../store";

//view
import HomePage from "../components/HomePage.vue";
import LoginPage from "../components/LoginPage.vue";

const includPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return includPush.call(this, location).catch(err => err)
}


Vue.use(Router);

const routes = [
  {
    //預設
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: '/login',
    name: "Login",
    component: LoginPage,
  },
  {
    //都不符合導至預設
    path: "*",
    redirect: "/",
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  //路由需要認證
  if (to.meta.requireAuth || to.path === '/login') {
    //判斷store裡是否有token
    if (store.state.userinfo) {
      next();
    } else {
      next({path: '/login',})
    }
  } next();
})

export default router;
