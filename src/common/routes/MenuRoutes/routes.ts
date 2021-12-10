import { Dashboard } from "../../../container/Dashboard";
import Error404 from "../../../container/error/error404"
import Error500 from "../../../container/error/error500"
import { FcAnalysis } from "../../../container/IntellAnalysis/FcAnalysis";
import { FrcAnalysis } from "../../../container/IntellAnalysis/FrcAnalysis";
// import { FcParams } from "../../../container/ManageParams/FcParams";
import { MatchDegree } from "../../../container/ManageParams/FcParams/MatchDegree";
import { FCRecord } from "../../../container/MyRedcord/FcRecord";
import { FrcRecord } from "../../../container/MyRedcord/FrcRecord";
import { Operate } from "../../../container/ManageParams/FrcParams/operate";
import { Profit } from "../../../container/ManageParams/FrcParams/profit";
import { PayDebt } from "../../../container/ManageParams/FrcParams/paydebt";
import { Guarantee } from "../../../container/ManageParams/FrcParams/guarantee";
import { FcPayDebt } from "../../../container/ManageParams/FcParams/paydebt";
import { FcProfit } from "../../../container/ManageParams/FcParams/profit";
import { ManageUsers } from "../../../container/ManageUsers";
import { ManageCharacters } from "../../../container/ManageCharacters";
import { SystemLog } from "../../../container/SystemLog";
import { Score } from "../../../container/ManageParams/FrcParams/Score";


export const routes = [
  { path: '/fyapp/dashboard', component: Dashboard },
  { path: '/fyapp/myRecord/FC', component: FCRecord },
  { path: '/fyapp/myRecord/FRC', component: FrcRecord },
  { path: '/fyapp/analysis/FC', component: FcAnalysis },
  { path: '/fyapp/analysis/FRC', component: FrcAnalysis },
  // { path: '/fyapp/params/FC', component: FcParams },
  { path: '/fyapp/params/FC/customMatchDegree', component: MatchDegree },
  { path: '/fyapp/params/FC/profit', component: FcProfit },
  { path: '/fyapp/params/FC/paydebt', component: FcPayDebt },
  { path: '/fyapp/params/FRC/operate', component: Operate },
  { path: '/fyapp/params/FRC/profit', component: Profit },
  { path: '/fyapp/params/FRC/paydebt', component: PayDebt },
  { path: '/fyapp/params/FRC/guarantee', component: Guarantee },
  { path: '/fyapp/params/FRC/summary', component: Score },
  { path: '/fyapp/systemlog', component: SystemLog },
  { path: '/fyapp/users', component: ManageUsers },
  { path: '/fyapp/characters', component: ManageCharacters },
  { path: '/fyapp/error/404', component: Error404 },
  { path: '/fyapp/error/500', component: Error500 },
]