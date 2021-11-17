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
  menuParentId?: string
  breadcrumbParentId?: string
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
      component: 'Dashboard',
      icon: 'dashboard'
    },
    {
      path: '/userAdmin',
      title: "用户管理",
      icon: 'user'
    },
    {
      path: '/authUser',
      title: "角色管理",
      icon: 'usersManage'
    },
    {
      path: '/params',
      title: '参数管理',
      icon: 'message'
    }
  ],
  others: [] // not related to menu
}
