export interface IMenuRoutesBase {
  id: string
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
  auth?: boolean
}

export interface IMenuRoutes extends IMenuRoutesBase {
  subs?: IMenuRoutes[]
}

export const routes: {
  menus: IMenuRoutes[]
} = {
  menus: [
    // menu route
    {
      id: "1",
      path: '/dashboard',
      title: "控制台",
      icon: 'dashboard',
      auth: true
    },
    {
      id: "2",
      path: '/user',
      title: "用户管理",
      icon: 'user',
      breadcrumbParentId: '1'
    },
    {
      id: "3",
      path: '/authUser',
      title: "角色管理",
      icon: 'usersManage'
    },
    {
      id: "4",
      path: '/params',
      title: '参数管理',
      icon: 'message'
    }
  ]
}
