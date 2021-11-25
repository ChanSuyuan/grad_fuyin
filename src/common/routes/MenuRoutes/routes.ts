import { Dashboard } from "../../../container/Dashboard";
import Error404 from "../../../container/error/error404"
import Error500 from "../../../container/error/error500"
import { FcAnalysis } from "../../../container/IntellAnalysis/FcAnalysis";
import { FrcAnalysis } from "../../../container/IntellAnalysis/FrcAnalysis";
import { FcParams } from "../../../container/ManageParams/FcParams";
import { FrcParams } from "../../../container/ManageParams/FrcParams";
import { FCRecord } from "../../../container/MyRedcord/FcRecord";
import { FrcRecord } from "../../../container/MyRedcord/FrcRecord";


export const routes = [
  { path: '/fyapp/dashboard', component: Dashboard },
  { path: '/fyapp/myRecord/FC', component: FCRecord },
  { path: '/fyapp/myRecord/FRC', component: FrcRecord },
  { path: '/fyapp/analysis/FC', component: FcAnalysis },
  { path: '/fyapp/analysis/FRC', component: FrcAnalysis },
  { path: '/fyapp/params/FC', component: FcParams },
  { path: '/fyapp/params/FRC', component: FrcParams },
  { path: '/fyapp/error/404', component: Error404 },
  { path: '/fyapp/error/500', component: Error500 },
]