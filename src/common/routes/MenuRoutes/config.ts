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
  permission?: boolean
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
  },
  {
    path: 'fyapp/selfCenter',
    title: '个人中心',
    icon: 'user'
  },
  {
    path: '/fyapp/user',
    title: "用户管理",
    icon: 'user',
    permission: "1"
  },
  {
    path: '/fyapp/authUser',
    title: "角色管理",
    icon: 'usersManage',
    permission: "1"
  },
  {
    path: '/fyapp/params',
    title: '参数管理',
    icon: 'message',
    permission: "1",
    children: [
      {
        path: '/fyapp/params/FC',
        title: '融资模型',
        icon: 'team',
        children: [
          {
            path: '/fyapp/params/FC/customMatchDegree',
            title: '融资匹配度',
            icon: 'team'
          },
          {
            path: '/fyapp/params/FC/paydebt',
            title: '偿债能力',
            icon: 'team'
          },
          {
            path: '/fyapp/params/FC/profit',
            title: '盈利能力',
            icon: 'team'
          }
        ]
      },
      {
        path: '/fyapp/params/FRC',
        title: '融资风控模型',
        icon: 'team',
        children: [
          {
            path: '/fyapp/params/FRC/operate',
            title: '营运能力',
            icon: 'team'
          },
          {
            path: '/fyapp/params/FRC/profit',
            title: '盈利能力',
            icon: 'team'
          },
          {
            path: '/fyapp/params/FRC/paydebt',
            title: '偿债能力',
            icon: 'team'
          },
          {
            path: '/fyapp/params/FRC/guarantee',
            title: '担保能力',
            icon: 'team'
          }

        ]
      }
    ]
  },
  {
    path: '/fyapp/myRecord',
    title: '我的记录',
    icon: 'edit',
    children: [
      {
        path: '/fyapp/myRecord/FC',
        title: '融资类',
        icon: 'team'
      },
      {
        path: '/fyapp/myRecord/FRC',
        title: '融资风控类',
        icon: 'team'
      }
    ]
  },
  {
    path: '/fyapp/analysis',
    title: '智能分析',
    icon: 'team',
    children: [
      {
        path: '/fyapp/analysis/FC',
        title: '融资模型评估',
        icon: 'team'
      },
      {
        path: '/fyapp/analysis/FRC',
        title: '融资风控模型评估',
        icon: 'team'
      }
    ]
  },
  {
    path: '/fyapp/systemlog',
    title: '系统日志',
    icon: 'team',
    permission: "1"
  }
]

