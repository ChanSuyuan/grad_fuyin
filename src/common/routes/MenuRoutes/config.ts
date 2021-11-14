export interface IMenuRoutesBase {
  key: string;
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

export const menus: {
  menus: IMenuRoutes[]
  others: IMenuRoutes[] | []
  [index: string]: any
} = {
  menus: [
    // menu route
    {
      key: '/dashboard/index',
      title: "控制台",
      component: "Dashboard"
    }
  ],
  others: [] // not related to menu
}