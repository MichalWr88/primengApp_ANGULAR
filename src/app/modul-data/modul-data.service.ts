import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable, Subject } from 'rxjs';

@Injectable()
export class ModulDataService {
  posts: Array<any> = [];
  constructor(private http: Http) {}

  getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http
      .get(url)
      .toPromise()
      .then(res => res.json())
      .then(data => {
        console.log(data);

        return data;
      });
  }
}
