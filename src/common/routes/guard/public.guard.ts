import { GuardProps, GuardReturnType } from "../config";
import { LoginStatus } from "./loginStatus";



export const publicGuard = (props: GuardProps): GuardReturnType => {
  if (!LoginStatus()) {
    if (props.history) {
      props.history.replace('/login')
    }
  }
  return true
}
