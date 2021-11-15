export interface IMenuRoutesBase {
  path: string;
  title: string;
  icon?: string;
  component?: string;
  query?: string;
  requireAuth?: string;
  route?: string;
  /** 是否登录校验，true不进行校验（访客） */
  login?: boolean;
}

export interface IMenuRoutes extends IMenuRoutesBase {
  subs?: IMenuRoutes[]
}

export const routes: {
  menus: IMenuRoutes[]
  others: IMenuRoutes[] | []
  [index: string]: any
} = {
  menus: [
    // menu route
    {
      path: '/dashboard/index',
      title: "控制台",
      icon: 'moblie',
      component: 'Dashboard'
    },
    {
      path: '/useradmin',
      title: "用户管理"
    },
    {
      path: '/authuser',
      title: "角色管理"
    },
    {
      path: '/params',
      title: '参数管理'
    }
  ],
  others: [] // not related to menu
}
