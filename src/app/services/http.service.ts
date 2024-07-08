import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // private http = inject(HttpClient);
  constructor(public http: HttpClient) {}
  getData(tab: string): Promise<any> {
    const res = this.http.get('http://localhost:3000/' + tab);
    return new Promise((reserved, reject) => {
      res.subscribe({
        error(err) {
          reject(err);
        },
        next: (data) => {
          reserved(data);
        },
      });
    });
  }
}
