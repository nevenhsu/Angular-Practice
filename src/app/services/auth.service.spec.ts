import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    authService = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
  });

  /// Tests begin ///
  it('should return status and token successfully at login', () => {
    const credentials = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';
    const httpResponse = {
      status: 200,
      body: { token: credentials }
    };
    let loginResponse;

    authService.login(credentials).subscribe(res => {
      loginResponse = res;
      expect(loginResponse).toEqual(httpResponse);
    }, error => {
      console.error(`Login error:`, error);
    });

    const loginRequest = httpMock.expectOne((req: HttpRequest<any>) => {
      return req.method === 'POST'
        && req.url === '/api/authenticate'
        && JSON.stringify(req.body) === JSON.stringify(credentials);
    });

    loginRequest.flush(httpResponse);
  });

  afterEach(() => {
    httpMock.verify();
  });

});
