import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestDataService {

  private serverPath = environment.url + ':' + environment.port;
  constructor(private http: HttpClient) { }

  getData(url = '', queryParams?: any ): Observable<any> {
    const path = this.serverPath + url;
    return this.http.get(path, { params: queryParams }).pipe(
      catchError(this.handleError)
    );
  }

  postData(url= '', data): Observable<any>{
    const path = this.serverPath + url;
    return this.http.post(path, data).pipe(
      catchError(this.handleError)
    );

  }

  putData(url= '', data): Observable<any>{
    const path = this.serverPath + url;
    return this.http.put(path, data).pipe(
      catchError(this.handleError)
    );
  }


  deleteData(url= '', id): Observable<any>{
    const path = this.serverPath + url + '/' + id;
    return this.http.delete(path).pipe(
      catchError(this.handleError)
    );
  }

  handleError(errorRes: HttpErrorResponse): Observable<never> {
    console.log(errorRes);
    return throwError(errorRes);
  }
}
