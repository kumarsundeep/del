import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable, of, from , throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';


// import loader module

@Injectable()
export class RestService {
  private headers: Headers;
  private options: RequestOptions;
  private optionsDelete: RequestOptions;

  public apiTypes = {
    "auth": "auth",
    "app": "app"
  };

  appAuthUrl: string = 'http://apiurl';
  appUrl: string = 'http://apiurl';


  constructor(private http: Http) {    
    this.pushHeaders();
  }

  public pushHeaders() {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') });
    this.options = new RequestOptions({ headers: this.headers });
    this.optionsDelete = new RequestOptions({ headers: this.headers });
  }

  public getService(url: string, isAuth?: string): Observable<any> {
    const _url = isAuth === this.apiTypes.auth ? this.appAuthUrl + url : this.appUrl + url;
    // show loader
    return this.http.get(_url, this.options)
      .pipe(map(
        //extract data here
      ), 
      catchError( error => {
        return throwError( 'Something went wrong!' )
      });
      /*
      ()=>{
        // hide loader
      };    */  
  }

  

  public postService(url: string, param: any, isAuth?: string): Observable<any> {
    const body = JSON.stringify(param);
    let _url = isAuth === this.apiTypes.auth ? this.appAuthUrl + url : this.appUrl + url;

    // loader show
    return this.http
      .post(_url, body, this.options)
      .pipe(map(
        //extract data here
      ), catchErrorerror => {
        return throwError( 'Something went wrong!' )
      })/*
      ()=>{
        // hide loader
      };    */     
  }

  


}

export const apiEndPoints =
{
  appAuthUrl: "",
  appUrl: "",
  baseHangFireUrl: ""
}
