import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/operator/catch';


@Injectable()
export class DataService {

  constructor(private url: string, protected httpClient: HttpClient) { }


  getAll<T>(): Observable<T> {
    return this.httpClient.get<T>(this.url)
        .pipe(
            retry(3),
            catchError(this.handleError('getAll'))
        );
  }

  create(resource) {
    return this.httpClient.post(this.url, resource)
        .pipe(
            catchError(this.handleError('create'))
        );
  }

  update(resource, body: object) {
    return this.httpClient.patch(`${this.url}/${resource.id}`, body)
        .pipe(
            catchError(this.handleError('update'))
        );
  }

  delete(id) {
    return this.httpClient.delete(`${this.url}/${id}`)
        .pipe(
            catchError(this.handleError('deletePost'))
        );
  }

  private handleError(operation: String) {
    return (error: any) => {
      const errorMessage = `error in ${operation}() retrieving ${this.url}`;

      if (error instanceof HttpErrorResponse) {
        // Client-side error occurred.
        console.error(errorMessage, error.error.message);
      } else {
        // Backend Error
        console.error(errorMessage,
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`
        );
      }

      return ErrorObservable.create(error);
    };
  }
}
