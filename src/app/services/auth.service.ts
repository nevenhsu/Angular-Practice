import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(credentials) {
    console.log(credentials);
    return this.httpClient.post('/api/authenticate', credentials)
        .pipe(
            tap((data) => {
              console.log(data);
              if (data) {
                return true;
              } else {
                return false;
              }
            }),

            catchError((err) => {
              console.log('Error: login failed.');
              return ErrorObservable.create(err);
            })
        );
  }

  logout() {}


}
