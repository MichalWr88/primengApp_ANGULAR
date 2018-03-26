import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ModulDataService {

  constructor(private http: HttpClient) {}

  getPosts(url) {
    return this.http.get(url);
  }
}
