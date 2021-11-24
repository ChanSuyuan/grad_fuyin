import { Dashboard } from "../../../container/Dashboard";
import Error404 from "../../../container/error/error404"
import Error500 from "../../../container/error/error500"
import { FcAnalysis } from "../../../container/IntellAnalysis/FcAnalysis";
import { FrcAnalysis } from "../../../container/IntellAnalysis/FrcAnalysis";
import { MyRecord } from "../../../container/MyRedcord";

export const routes = [
  { path: '/fyapp/dashboard', component: Dashboard },
  { path: '/fyapp/myRecord', component: MyRecord },
  { path: '/fyapp/analysis/FC', component: FcAnalysis },
  { path: '/fyapp/analysis/FRC', component: FrcAnalysis },
  { path: '/fyapp/error/404', component: Error404 },
  { path: '/fyapp/error/500', component: Error500 },
]