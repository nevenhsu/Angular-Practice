import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let orderService: OrderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService],
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    orderService = TestBed.get(OrderService);
    httpMock = TestBed.get(HttpTestingController);
  });

  /// Tests begin ///
  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  it('should return list at order', () => {
    const httpResponse = {
      status: 200,
      body: [1, 2, 3]
    };
    let orderResponse;

    orderService.getOrder().subscribe(res => {
      orderResponse = res;
      expect(orderResponse).toEqual(httpResponse);
    }, error => {
      console.error(`Order error:`, error);
    });

    const orderRequest = httpMock.expectOne((req: HttpRequest<any>) => {
      return req.method === 'GET'
          && req.url === '/api/orders';
    });

    orderRequest.flush(httpResponse);
  });


});
