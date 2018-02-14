import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrder() {
    return this.httpClient.get('/api/orders')
        .pipe(
            catchError((err) => {
              console.log('Error: order failed.');
              return ErrorObservable.create(err);
            })
        );
  }

}
