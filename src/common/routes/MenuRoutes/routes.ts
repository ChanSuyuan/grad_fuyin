import { Dashboard } from "../../../container/Dashboard";
import Error404 from "../../../container/error/error404"
import Error500 from "../../../container/error/error500"

export const routes = [
  { path: '/fyapp/dashboard', component: Dashboard },
  { path: '/fyapp/error/404', component: Error404 },
  { path: '/fyapp/error/500', component: Error500 }
]