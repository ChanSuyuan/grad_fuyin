import { Dashboard } from "../../container/Dashboard";
import { Login } from "../../user/login";
import { Regist } from "../../user/regist";
import { IRouteConfig } from "./config";

export const routerConfig: IRouteConfig[] = [
  // route related DashBoard
  //  路由守卫有缺陷，暂不使用
  {
    path: '/',
    title: '登录',
    component: Login
  },
  {
    path: 'dashboard',
    title: '控制台',
    component: Dashboard,
  },
  {
    path: 'register',
    title: "注册",
    component: Regist,
  }
]

