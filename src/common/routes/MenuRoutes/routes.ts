import { Dashboard } from "../../../container/Dashboard";
import Error404 from "../../../container/error/error404"
import Error500 from "../../../container/error/error500"
import { Analysis } from "../../../container/IntellAnalysis";
import { MyRecord } from "../../../container/MyRedcord";

export const routes = [
  { path: '/fyapp/dashboard', component: Dashboard },
  { path: '/fyapp/myRecord', component: MyRecord },
  { path: '/fyapp/analysis', component: Analysis },
  { path: '/fyapp/error/404', component: Error404 },
  { path: '/fyapp/error/500', component: Error500 },
]