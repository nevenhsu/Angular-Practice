import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubProfileService extends DataService {

  constructor(httpClient: HttpClient) {
    super('https://api.github.com/users', httpClient);
  }

}
