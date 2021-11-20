export enum statusCode {
  // success
  success = 200,
  // user not exist
  userNotExist = 412,
  // params is not compelete
  missParams = 400,
  // the account is disabled
  disabledAccount = 413,
  // the password or the username is wrong
  wrongParams = 414,


  // The registered user name is duplicate
  registFailure = 416,

  // email
  emailNotExist = 419,
  tooFrequently = 406,
  noEffectLink = 401
}