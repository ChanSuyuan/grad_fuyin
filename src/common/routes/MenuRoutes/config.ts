import React from "react";

export interface IMenuRoutesBase {
  id: string
  path: string;
  title: string;
  icon?: string;
  component?: React.ComponentClass | React.FunctionComponent
  query?: string;
  requireAuth?: string;
  route?: string;
  /** 是否登录校验，true不进行校验（访客） */
  exact?: boolean
  auth?: boolean
}

export interface IMenuRoutes extends IMenuRoutesBase {
  subs?: IMenuRoutes[]
}

export const menus = [

  // menu route
  {
    path: '/fyapp/dashboard',
    title: "首页",
    icon: 'dashboard',
    auth: true,
  },
  {
    path: '/fyapp/user',
    title: "用户管理",
    icon: 'user',
  },
  {
    path: '/fyapp/authUser',
    title: "角色管理",
    icon: 'usersManage'
  },
  {
    path: '/fyapp/params',
    title: '参数管理',
    icon: 'message'
  },
  {
    path: '/fyapp/myRecord',
    title: '我的记录',
    icon: 'edit'
  },
  {
    path: '/fyapp/analysis',
    title: '智能分析',
    icon: 'team'
  }
]

