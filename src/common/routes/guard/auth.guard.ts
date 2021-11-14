import { timer } from "rxjs";
import { GuardProps, GuardReturnType } from "../config";
import { LoginStatus } from "./loginStatus";
import { map } from 'rxjs/operators';

export const authGuard = (props: GuardProps): boolean => {
  if (!LoginStatus()) {
    if (props.history) {
      props.history.replace('/')
    }
    return false
  }
  return true
}

/**
 * async Guards
 * @params props
 */
export const asyncAuthGuard = async (props: GuardProps): Promise<boolean> => {
  await timer(2000).toPromise()
  if (!LoginStatus()) {
    if (props.history) {
      props.history.replace('/')
    }
    return false
  }
  return true
}

/**
 * async Guards that return an observable
 * @param props
 */
export const asyncAuthGuardObservable = (props: GuardProps): GuardReturnType => {
  return timer(2000).pipe(map(() => {
    if (!LoginStatus()) {
      if (props.history) {
        props.history.replace('/');
      }
      return false;
    }
    return true;
  }));
}