export interface LoginFormValue{

// email: string,
  //password:string
  //сбда это значение подставляем
  user_email: string,
  user_password: string

}
//для замены имени в будущем ,если захотим поменять
export enum LOGIN_FORM_NAMES {
    //меняем только значение
    EMAIL = 'user_email',
    PASSWORD = 'user_password'
  }