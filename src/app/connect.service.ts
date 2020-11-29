import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConstantPool } from '@angular/compiler';


/*
options: {
headers?: HttpHeaders | {[header: string]: string | string[]},
observe?: 'body' | 'events' | 'response',
params?: HttpParams|{[param: string]: string | string[]},
reportProgress?: boolean,
responseType?: 'arraybuffer'|'blob'|'json'|'text',
withCredentials?: boolean,
}

*/
const api = "http://106.14.58.177:8081";

const myOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  //responseType: 'json' as const
};

export interface statusAndMsg {
  status: string,
  msg: string
}
export interface statusAndMsgAndMap {
  status: string,//是否成功返回
  msg: string,//失败返回：信息   成功返回：棋局状态
  map: Array<number>

}
@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  flag: boolean = false;
  showUserName: string = "Mr.Nobody";
  private hashpwd: string;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.


      return of(result as T);
    };
  }

  constructor(private myConnect: HttpClient) { }

  showUser(userName: string, pwdHash: string) {
    this.flag = true;
    this.showUserName = userName;
    this.hashpwd = pwdHash;
  }
  logIn(userName: string, pwdHash: string): Observable<statusAndMsg> {
    let myBody = { "userName": userName, "pwdHash": pwdHash };
    return this.myConnect.post<statusAndMsg>(api + '/login', myBody, myOptions)
      .pipe(
        //retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      )

  }
  signUp(userName: string, pwdHash: string): Observable<statusAndMsg> {
    let myBody = { "userName": userName, "pwdHash": pwdHash };
    return this.myConnect.post<statusAndMsg>(api + '/signup', myBody, myOptions)
      .pipe(
        //retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      )
  }
  startGame(X: number, Y: number, L: number): Observable<statusAndMsgAndMap> {
    console.log(this.flag, this.showUserName, this.hashpwd);
    if (this.flag) {
      let myBody = { "userName": this.showUserName, "pwdHash": this.hashpwd, "X": X, "Y": Y, "L": L };
      return this.myConnect.post<statusAndMsgAndMap>(api + '/startGame', myBody, myOptions);
    } else {
      return of({ status: 'fail', msg: '用户未登录' } as any);
    }
  }
  clickHere(X: number, Y: number): Observable<statusAndMsgAndMap> {
    let myBody = { "userName": this.showUserName, "pwdHash": this.hashpwd, "X": X, "Y": Y };
    return this.myConnect.post<statusAndMsgAndMap>(api + '/clickHere', myBody, myOptions)
  }
}
