import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);
  constructor() {}
  getData(tab: string): Promise<any> {
    const res = this.http.get(environment.url + tab);
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
