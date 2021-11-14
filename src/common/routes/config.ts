/** 
 * @file 路由信息
 */
import React, { ComponentType, LazyExoticComponent } from "react";
import { RouteComponentProps } from "react-router";
import { Observable } from 'rxjs';
export interface IMatchOptions {
  // 路径
  path: string
  /** 是否精确匹配 */
  exact?: boolean
}

export interface RouteProps extends IMatchOptions {
  /** 路由内容的 title */
  title?: string
  /** 路由内容 */
  component?: React.ComponentClass<any> | React.FunctionComponent<any> | ComponentType | LazyExoticComponent<any>;
  /** 是否需要鉴权 */
  guards?: any[]
  gurad?: boolean
  /** 是否在前面加个图标 */
  icon?: string
}

export interface IRouteConfig extends RouteProps {
  /** 是否有额外栏目 */
  subs?: IRouteConfig[]
}


export interface OutLetProps {
  routes: IRouteConfig[];
  rootPath?: string;
}

export type GuardReturnType = boolean | Promise<boolean> | Observable<any>
export type GuardProps = IRouteConfig & RouteComponentProps
