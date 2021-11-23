import { Breadcrumb } from "antd";

import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";
import { iconMap } from "../../utils/iconMap";
import './index.less'
import { menus } from "../../routes/MenuRoutes/config";

// const { pathToRegexp } = require('path-to-regexp')

// const BreadCustom = (props: BreadProps) => {
//   // 生成面包屑
//   const generateBreadcrumbs = (paths: any) => {
//     return paths.map((item: any, key: any) => {
//       const content = item && (
//         <Fragment>
//           {item.icon && (
//             <span style={{ marginRight: 4 }}>{iconMap[item.icon]}</span>
//           )}
//           {item.title}
//         </Fragment>
//       )
//       return (
//         item && (
//           <Breadcrumb.Item key={key}>
//             {paths.length - 1 !== key ? (
//               <Link to={item.path || '#'}>{content}</Link>
//             ) : (
//               content
//             )}
//           </Breadcrumb.Item>
//         )
//       )
//     })
//   }

//   const { routeList, location } = props
//   const currentRoute = routeList.find(
//     (_: any) => _.path && pathToRegexp(_.path).exec(location.pathname)
//   )

//   const paths = currentRoute ? queryAncestors(routeList, currentRoute, 'breadcrumbParentId').reverse()
//     : [
//       routeList[0],
//       {
//         id: 404,
//         title: `Not Found`,
//       },
//     ]

//   return (
//     <Breadcrumb className="bread">
//       {generateBreadcrumbs(paths)}
//     </Breadcrumb>
//   )
// }


const BreadCustom: React.FC<RouteComponentProps> = (props) => {
  const createBreadCrumbData = (location: any, data: any) => {
    let arrA: any = [];
    let arrB: any = [];
    let arrC: any = [];
    data.forEach((a: any) => {
      if (location.pathname === a.path) {
        arrA.push(a);
      }
      if (a.children && a.children.length > 0) {
        a.children.forEach((b: any) => {
          if (location.pathname === b.path) {
            arrB.push(b);
            arrA.push({
              icon: a.icon || '',
              path: a.path,
              title: a.title
            });
          }
          if (b.children && b.children.length > 0) {
            b.children.forEach((c: any) => {
              if (location.pathname === c.path) {
                arrC.push(c);
                arrB.push({
                  icon: b.icon || '',
                  path: b.path,
                  title: b.title
                });
                arrA.push({
                  icon: a.icon || '',
                  path: a.path,
                  title: a.title
                });
              }
            });
          }
        });
      }
    });
    return [...arrA, ...arrB, ...arrC];
  };
  const { location } = props
  const routes = createBreadCrumbData(location, menus)
  if (!routes.length) return null

  const itemRender = (route: any, params: any, routes: any, paths: any) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <Link to={route.path}>{route.icon && (<span style={{ marginRight: 4 }}>{iconMap[route.icon]}</span>)}{route.title}</Link>
      : <span>{route.icon && (<span style={{ marginRight: 4 }}>{iconMap[route.icon]}</span>)} {route.title}</span>;
  }

  return (
    <div className="breadCrumb">
      <Breadcrumb routes={routes} itemRender={itemRender} />
    </div>
  )
}

export default withRouter(BreadCustom)