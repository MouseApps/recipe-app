import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/**
 * makes http requests
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  /**
   * get
   * @param url url of get
   */
  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(environment.apiConfig.restURI + url).pipe(catchError(err => {
      return this.handleError(err);
    }));
  }

  /**
   * post
   * @param url url of post
   * @param body post body
   */
  public post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(environment.apiConfig.restURI + url, body).pipe(catchError(err => {
      return this.handleError(err);
    }));
  }

  /**
   * put
   * @param url url of put
   * @param body body
   */
  public put<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(environment.apiConfig.restURI + url, body).pipe(catchError(err => {
      return this.handleError(err);
    }));
  }

  /**
   * delete
   * @param url url of delete
   * @param body body
   */
  public delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(environment.apiConfig.restURI + url).pipe(catchError(err => {
      return this.handleError(err);
    }));
  }

  /**
   * errors
   * @param err any input from the http
   */
  private handleError(err: any): Observable<never> {
    if (err instanceof HttpErrorResponse) {
      console.warn(err);
      err = err.message;
    }
    return throwError(err);
  }
}
