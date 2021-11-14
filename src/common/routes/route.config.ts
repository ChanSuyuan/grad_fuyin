
import { Dashboard } from "../../container";
import { Login } from "../../userAccount-admin/login";
import { Regist } from "../../userAccount-admin/regist";
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

