import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


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

export interface logInAndSignUpMsg {
  status: string,
  msg: string
}
@Injectable({
  providedIn: 'root'
})
export class ConnectService {

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


  logIn(userName: string, pwdHash: string): Observable<logInAndSignUpMsg> {
    let myBody = { "userName": userName, "pwdHash": pwdHash };
    return this.myConnect.post<logInAndSignUpMsg>(api + '/login', myBody, myOptions)
      .pipe(
        //retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      )

  }
  signUp(userName: string, pwdHash: string): Observable<logInAndSignUpMsg> {
    let myBody = { "userName": userName, "pwdHash": pwdHash };
    return this.myConnect.post<logInAndSignUpMsg>(api + '/signup', myBody, myOptions)
      .pipe(
        //retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      )
  }
  startGame(userName: string, pwdHash: string, X: number, Y: number): Observable<JSON> {
    let myBody = { "userName": userName, "pwdHash": pwdHash ,"X":X,"Y":Y};
    return this.myConnect.post<JSON>('/startGame', myBody, myOptions)
  }
  clickHere(userName: string, pwdHash: string, X: number, Y: number): Observable<JSON> {
    let myBody = { "userName": userName, "pwdHash": pwdHash ,"X":X,"Y":Y};
    return this.myConnect.post<JSON>('/clickHere', myBody, myOptions)
  }
}
