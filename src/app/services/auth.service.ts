import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() fireIsLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  signup(data: any) {
    return this.httpClient.post(this.url +
      "/user/signup", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  login(data: any) {
    return this.httpClient.post(this.url +
      "/user/login", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  logout() {
    return this.httpClient.get(this.url +
      "/user/logout", {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  setLoginStatus(status: boolean) {
    this.fireIsLoggedIn.emit(status);
  }

  getEmitter() {
    return this.fireIsLoggedIn;
  }
}
